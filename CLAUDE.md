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
  Prices are `[count, unit]` tuples (e.g. `[2, 'kiss']`). The only units are kiss, hug, cuddle and living room dance
  (user rule; living room dance should be fairly common). The receipt sums them per
  unit for "Total due". Required options carry a `missing` string used as the validation toast.
- `app.js`: hash router (`#welcome`, `#menu`, `#review`, `#thanks`), rendering, events, ntfy send.
  `orderLines()` is the single source for receipt, thank-you list and ntfy message.
- `doodles.js`: simple line doodles (32×32). On the menu they show as faint one-ink rubber stamps behind the rows:
  CSS recolours them to `--stamp` at low opacity, and the `#stamp` SVG filter in index.html roughens the edges and adds
  speckle. `z-index: -1` inside the isolated `.menu-sec` keeps them above the ruling but under text and cards. About 15 dishes
  get one via `doodle: { name, x, y, tilt, size }` in menu.js, placed by hand with varied spots (user: never a
  column of icons, and not in the gaps between lines). The user rejected the crêpe, burrito and bacon drawings, so don't bring them back.
- **Ruled-paper grid (menu):** rules every 28px. Loose text is always exactly one 28px line (`.item-line` has a
  fixed height, because baseline-aligning three fonts grows it to 29px and the error compounds). Vertical spacing is
  only 0 or multiples of 28. Everything else is an opaque `.snap` card whose height a ResizeObserver in app.js rounds
  up to whole lines. Selected dishes get a highlighter swipe (`.hl` background-size), not a box.
- **Colour coding:** each section has a `fill` (sticker colour) and an `ink` (`--<colour>-ink`, a darker shade readable
  on paper). `--fill-ink` is set on the `<section>`, and prices, stamps and store-bought tags all use it. Service chips are
  periwinkle shades (`--peri`, `--peri-lite`). The Review order button is `--tangerine`, which no section uses.
- **Option cards:** taped down with `.snap::before/::after`, on the bottom corners and the sides only, never the top
  edge, which sits under the name and price. Selected chips are hand-cut stickers (double white margin, gloss, pop
  animation) with a tick or heart badge inside the top edge, so neighbouring badges don't collide.
- `styles.css`: meowmap's "scrapbook tactile" tokens/stickers copied over (light-only). Dashed edges are
  gradient layers, never `border-style: dashed`, and never set the `background` shorthand on `.chip`/`.btn-ghost`.
- **Cache busting:** Pages serves everything with `max-age=600`. Every asset URL, including the ES module imports
  in app.js, carries `?v=__BUILD__`, which the deploy workflow seds to the short commit SHA. A new local import needs it too.
- `og.png` (1200×630 text-message link preview) and `icon.png` (favicon/touch icon, 192²) are the coffee-cup doodle on
  a marigold sticker. They were rendered from a scratch HTML page via headless Brave over CDP; the `brave --screenshot` CLI hangs.
  The `og:image` URL in `index.html` is absolute.

## Testing
No test suite. Drive it in headless Brave via raw CDP (Node 22 global `WebSocket`; npm installs were denied),
intercepting `https://ntfy.sh/*` with `Fetch.enable` so tests don't post real notifications. Assert grid alignment
by checking that every `.item-line/.item-desc/.sec-note/.sec-head/.snap` top and height relative to `#menu-body` is % 28 === 0.
