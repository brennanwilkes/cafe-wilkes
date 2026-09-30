# Café Wilkes — birthday breakfast order form

One-off, deliberately insecure mobile webapp: Isabelle opens a texted link, orders breakfast
restaurant-style, Brennan gets a push notification. Live at https://brennanwilkes.github.io/cafe-wilkes/

## Architecture
- Static only, no backend, no build step. Vanilla ES modules in `frontend/`, deployed as-is to
  GitHub Pages by `.github/workflows/deploy-pages.yml` on push to `main` (paths `frontend/**`).
- Orders are sent to **ntfy.sh**: `POST https://ntfy.sh/` with a JSON body `{topic, title, message, tags, priority}`.
  No `Content-Type` header on purpose; that keeps it a simple CORS request with no preflight. The topic in
  `frontend/config.js` is the only "secret". Subscribe to it in the ntfy app. Messages are cached ~12h
  server-side; also viewable at `https://ntfy.sh/<topic>`.
- State lives in `localStorage` (`cafe-wilkes-order`): `{ draft, submitted: {order, at, version} | null }`.
  The draft persists on every change, so "Change my order" just returns to `#menu`. Each resubmit bumps `version`
  and the ntfy title says "changed her order (vN)".
- **Reset** after testing: open the site with `?reset` (clears storage on that device, strips the query).

## Files
- `menu.js`: all menu data. Descriptions (`desc`) only list what's in a dish when the name alone is unclear. Never
  flavour text (user rule). Isabelle dislikes banana, blueberries and sprinkles, so keep them off the toppings.
  Prices are `[count, unit]` tuples (e.g. `[2, 'kiss']`); the receipt sums them per
  unit for "Total due". Required options carry a `missing` string used as the validation toast.
- `app.js`: hash router (`#welcome`, `#menu`, `#review`, `#thanks`), rendering, events, ntfy send.
  `orderLines()` is the single source for receipt, thank-you list and ntfy message.
- `doodles.js`: simple inline-SVG line doodles (32×32, ink stroke + flat fill), keyed by `doodle` in menu.js.
- **Ruled-paper grid (menu):** rules every 28px. Loose text is always exactly one 28px line (`.item-line` has a
  fixed height, because baseline-aligning three fonts grows it to 29px and the error compounds). Vertical spacing is
  only 0 or multiples of 28. Everything else is an opaque `.snap` card whose height a ResizeObserver in app.js rounds
  up to whole lines. Selected dishes get a highlighter swipe (`.hl` background-size), not a box.
- `styles.css`: meowmap's "scrapbook tactile" tokens/stickers copied over (light-only). Dashed edges are
  gradient layers, never `border-style: dashed`, and never set the `background` shorthand on `.chip`/`.btn-ghost`.
- `og.png` (1200×630 link preview) and `icon.png` were screenshotted from the live page in headless Brave.
  Regenerate them if the welcome card changes. The `og:image` URL in `index.html` is absolute.

## Testing
No test suite. Drive it in headless Brave via raw CDP (Node 22 global `WebSocket`; npm installs were denied),
intercepting `https://ntfy.sh/*` with `Fetch.enable` so tests don't post real notifications. Assert grid alignment
by checking that every `.item-line/.item-desc/.sec-note/.sec-head/.snap` top and height relative to `#menu-body` is % 28 === 0.
