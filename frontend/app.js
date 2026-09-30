import { NTFY_TOPIC, STORAGE_KEY } from './config.js';
import { DRINKS, SECTIONS, SERVE_TIMES, PLACES, ITEMS, DRINKS_BY_ID } from './menu.js';

const $ = sel => document.querySelector(sel);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const blankOrder = () => ({ drink: null, items: {}, time: null, place: null, notes: '' });

if (new URLSearchParams(location.search).has('reset')) {
  localStorage.removeItem(STORAGE_KEY);
  history.replaceState(null, '', location.pathname);
}

const saved = localStorage.getItem(STORAGE_KEY);
const store = saved === null ? { draft: blankOrder(), submitted: null } : JSON.parse(saved);
const order = store.draft;
const persist = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(store));

const plural = unit => (/(s|ch|sh|x)$/.test(unit) ? `${unit}es` : `${unit}s`);
const priceText = ([n, unit]) => `${n} ${n === 1 ? unit : plural(unit)}`;

function optionSummary(item, picks) {
  return (item.options ?? [])
    .map(opt => {
      const v = picks[opt.key];
      if (opt.type === 'text') return v.trim() ? `“${v.trim()}”` : '';
      if (opt.type === 'single') return v ?? '';
      return v.join(', ');
    })
    .filter(Boolean)
    .join(' · ');
}

// Receipt, thank-you page and the ntfy message all read from this, so they can't disagree.
function orderLines(o) {
  const lines = [];
  if (o.drink !== null) {
    const d = DRINKS_BY_ID.get(o.drink);
    lines.push({ name: d.name, detail: '', price: d.price, drink: true });
  }
  for (const [id, picks] of Object.entries(o.items)) {
    const item = ITEMS.get(id);
    lines.push({ name: item.name, detail: optionSummary(item, picks), price: item.price, drink: false });
  }
  return lines;
}

function totalDue(lines) {
  const byUnit = new Map();
  for (const { price: [n, unit] } of lines) byUnit.set(unit, (byUnit.get(unit) ?? 0) + n);
  return [...byUnit].map(([unit, n]) => priceText([n, unit])).join(', ');
}

function blankPicks(item) {
  const picks = {};
  for (const opt of item.options ?? []) picks[opt.key] = opt.type === 'multi' ? [] : opt.type === 'text' ? '' : null;
  return picks;
}

function problems(o) {
  const out = [];
  if (o.drink === null) out.push({ anchor: 'sec-drinks', msg: 'Pick a drink' });
  for (const [id, picks] of Object.entries(o.items)) {
    const item = ITEMS.get(id);
    for (const opt of item.options ?? []) {
      if (!opt.required) continue;
      const v = picks[opt.key];
      const empty = opt.type === 'multi' ? v.length === 0 : opt.type === 'text' ? !v.trim() : v === null;
      if (empty) out.push({ anchor: `item-${id}`, msg: opt.missing });
    }
  }
  if (o.time === null) out.push({ anchor: 'sec-service', msg: 'Pick a serving time' });
  if (o.place === null) out.push({ anchor: 'sec-service', msg: 'Pick where to serve it' });
  return out;
}

/* ── rendering ─────────────────────────────────────────────────────────── */

const CHECK_SVG = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12.8c2 1.6 3.4 3.3 4.6 5.4 2.6-5.6 6-9.8 10.6-13.4" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function chipRow(group, choices, selected, fill) {
  return `<div class="chiprow">${choices.map((c, i) => `
    <button type="button" class="chip" style="--fill:${fill};--tilt:${i % 2 ? 1.5 : -2}deg"
      data-group="${esc(group)}" data-value="${esc(c)}" aria-pressed="${selected(c)}">${esc(c)}</button>`).join('')}
  </div>`;
}

function itemHtml(item, fill, kind) {
  const on = kind === 'drink' ? order.drink === item.id : item.id in order.items;
  const picks = on && kind === 'food' ? order.items[item.id] : blankPicks(item);
  const opts = (item.options ?? []).map(opt => {
    const group = `${item.id}:${opt.key}`;
    const label = `<span class="opt-label">${esc(opt.label)}${opt.required ? '' : ' <em>(optional)</em>'}</span>`;
    if (opt.type === 'text') {
      return `<label class="opt">${label}<input type="text" class="field" data-text="${esc(group)}"
        placeholder="${esc(opt.placeholder)}" value="${esc(picks[opt.key])}" autocomplete="off"></label>`;
    }
    const sel = opt.type === 'multi' ? c => picks[opt.key].includes(c) : c => picks[opt.key] === c;
    return `<div class="opt">${label}${chipRow(group, opt.choices, sel, fill)}</div>`;
  }).join('');
  return `
    <div class="item${on ? ' on' : ''}" id="item-${item.id}" style="--fill:${fill}">
      <button type="button" class="item-head" data-${kind}="${item.id}" aria-pressed="${on}">
        <span class="check">${CHECK_SVG}</span>
        <span class="item-text">
          <span class="item-name">${esc(item.name)}${item.storeBought ? ' <span class="stamp mini">store-bought</span>' : ''}</span>
          <span class="item-desc">${esc(item.desc)}</span>
        </span>
        <span class="leader"></span>
        <span class="price">${esc(priceText(item.price))}</span>
      </button>
      ${opts ? `<div class="item-opts">${opts}</div>` : ''}
    </div>`;
}

function sectionHtml(id, title, note, fill, body) {
  return `
    <section class="menu-sec" id="${id}">
      <h2 class="sec-title"><span class="label" style="--fill:${fill}">${esc(title)}</span></h2>
      <p class="sec-note hand">${esc(note)}</p>
      ${body}
    </section>`;
}

function renderMenu() {
  $('#menu-body').innerHTML = [
    sectionHtml('sec-drinks', 'To Drink', 'Pick one.', 'var(--marigold)',
      DRINKS.map(d => itemHtml(d, 'var(--marigold)', 'drink')).join('')),
    ...SECTIONS.map(s => sectionHtml(`sec-${s.id}`, s.title, s.note, s.fill,
      s.items.map(i => itemHtml(i, s.fill, 'food')).join(''))),
    sectionHtml('sec-service', 'Service', 'The fine print.', 'var(--peri)', `
      <div class="opt"><span class="opt-label">When shall we serve?</span>
        ${chipRow('time', SERVE_TIMES, c => order.time === c, 'var(--marigold)')}</div>
      <div class="opt"><span class="opt-label">Where would you like it?</span>
        ${chipRow('place', PLACES, c => order.place === c, 'var(--jade)')}</div>
      <label class="opt"><span class="opt-label">Notes for the chef <em>(optional)</em></span>
        <textarea class="field" id="notes" rows="3" placeholder="Allergies, cravings, compliments…">${esc(order.notes)}</textarea></label>`),
  ].join('');
  updateBar();
}

function updateBar() {
  const n = orderLines(order).length;
  $('#bar-count').textContent = n === 0 ? 'Nothing yet' : `${n} item${n === 1 ? '' : 's'}`;
}

function renderReceipt() {
  const lines = orderLines(order);
  const editing = store.submitted !== null;
  $('#receipt').innerHTML = `
    <div class="rc-head">
      <div class="rc-brand">CAFÉ WILKES</div>
      <div class="rc-sub">Guest check · Birthday edition</div>
    </div>
    <div class="rc-meta">
      <span>Guest</span><span>Isabelle</span>
      <span>Served</span><span>${esc(order.time)}</span>
      <span>Table</span><span>${esc(order.place)}</span>
      <span>Server</span><span>Brennan</span>
    </div>
    <ul class="rc-lines">${lines.map(l => `
      <li><span class="rc-name">${esc(l.name)}${l.detail ? `<small>${esc(l.detail)}</small>` : ''}</span>
        <span class="rc-price">${esc(priceText(l.price))}</span></li>`).join('')}
    </ul>
    ${order.notes.trim() ? `<p class="rc-notes"><b>Note to chef:</b> ${esc(order.notes.trim())}</p>` : ''}
    <div class="rc-total"><span>Total due</span><span>${esc(totalDue(lines))}</span></div>
    <p class="rc-foot hand">Payable to the chef upon delivery. Gratuity encouraged.</p>`;
  $('#send').textContent = editing ? 'Send updated order' : 'Send to the kitchen';
}

function renderThanks() {
  const sub = store.submitted;
  const lines = orderLines(sub.order);
  $('#thanks-no').textContent = `Order #${String(sub.version).padStart(4, '0')}${sub.version > 1 ? ' (updated)' : ''}`;
  $('#thanks-when').textContent = `${sub.order.time} · ${sub.order.place}`;
  $('#thanks-list').innerHTML = lines.map(l =>
    `<li><b>${esc(l.name)}</b>${l.detail ? ` <span>${esc(l.detail)}</span>` : ''}</li>`).join('');
}

function confetti() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const colors = ['#ff5470', '#ffc145', '#3dbe8b', '#7c8cff', '#ffa8b6'];
  const layer = document.createElement('div');
  layer.className = 'confetti';
  for (let i = 0; i < 90; i++) {
    const p = document.createElement('i');
    p.style.cssText = `left:${Math.random() * 100}%;background:${colors[i % colors.length]};` +
      `animation-delay:${Math.random() * 0.6}s;animation-duration:${2.4 + Math.random() * 1.8}s;` +
      `--spin:${(Math.random() * 2 - 1) * 900}deg;--drift:${(Math.random() * 2 - 1) * 60}px;` +
      `width:${6 + Math.random() * 6}px;height:${10 + Math.random() * 8}px`;
    layer.appendChild(p);
  }
  document.body.appendChild(layer);
  setTimeout(() => layer.remove(), 5000);
}

/* ── routing ───────────────────────────────────────────────────────────── */

function show(screen) {
  if (screen === 'review' && problems(order).length > 0) screen = 'menu';
  if (screen === 'thanks' && store.submitted === null) screen = 'welcome';
  if (!['welcome', 'menu', 'review', 'thanks'].includes(screen)) screen = 'welcome';
  document.querySelectorAll('.screen').forEach(el => { el.hidden = el.id !== `screen-${screen}`; });
  document.body.dataset.screen = screen;
  $('#toast').hidden = true;
  if (screen === 'welcome') {
    $('#welcome-go').textContent = store.submitted === null ? 'See the menu' : 'View my order';
    $('#welcome-go').dataset.go = store.submitted === null ? 'menu' : 'thanks';
    $('#welcome-status').hidden = store.submitted === null;
  }
  if (screen === 'menu') renderMenu();
  if (screen === 'review') renderReceipt();
  if (screen === 'thanks') renderThanks();
  window.scrollTo(0, 0);
}

const go = screen => {
  if (location.hash === `#${screen}`) show(screen);
  else location.hash = screen;
};
window.addEventListener('hashchange', () => show(location.hash.slice(1)));

/* ── events ────────────────────────────────────────────────────────────── */

let toastTimer = null;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.hidden = true; }, 2600);
}

document.addEventListener('click', e => {
  const nav = e.target.closest('[data-go]');
  if (nav) { go(nav.dataset.go); return; }

  const drinkBtn = e.target.closest('[data-drink]');
  if (drinkBtn) {
    order.drink = order.drink === drinkBtn.dataset.drink ? null : drinkBtn.dataset.drink;
    document.querySelectorAll('[data-drink]').forEach(b => {
      const on = b.dataset.drink === order.drink;
      b.setAttribute('aria-pressed', on);
      b.parentElement.classList.toggle('on', on);
    });
    persist(); updateBar();
    return;
  }

  const foodBtn = e.target.closest('[data-food]');
  if (foodBtn) {
    const id = foodBtn.dataset.food;
    const el = foodBtn.parentElement;
    if (id in order.items) {
      delete order.items[id];
      el.outerHTML = itemHtml(ITEMS.get(id), el.style.getPropertyValue('--fill'), 'food');
    } else {
      order.items[id] = blankPicks(ITEMS.get(id));
      el.classList.add('on');
      foodBtn.setAttribute('aria-pressed', 'true');
    }
    persist(); updateBar();
    return;
  }

  const chip = e.target.closest('.chip[data-group]');
  if (chip) {
    const { group, value } = chip.dataset;
    if (group === 'time' || group === 'place') {
      order[group] = order[group] === value ? null : value;
      chip.parentElement.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', c.dataset.value === order[group]));
    } else {
      const [id, key] = group.split(':');
      const opt = ITEMS.get(id).options.find(o => o.key === key);
      const picks = order.items[id];
      if (opt.type === 'multi') {
        picks[key] = picks[key].includes(value) ? picks[key].filter(v => v !== value) : [...picks[key], value];
        chip.setAttribute('aria-pressed', picks[key].includes(value));
      } else {
        picks[key] = picks[key] === value ? null : value;
        chip.parentElement.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', c.dataset.value === picks[key]));
      }
    }
    persist();
    return;
  }

  if (e.target.closest('#to-review')) {
    const issues = problems(order);
    if (issues.length > 0) {
      toast(issues[0].msg);
      $(`#${issues[0].anchor}`).scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    go('review');
  }
});

document.addEventListener('input', e => {
  if (e.target.dataset.text) {
    const [id, key] = e.target.dataset.text.split(':');
    order.items[id][key] = e.target.value;
  } else if (e.target.id === 'notes') {
    order.notes = e.target.value;
  } else return;
  persist();
});

$('#send').addEventListener('click', async () => {
  const btn = $('#send');
  const label = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Sending to the kitchen…';

  const version = store.submitted === null ? 1 : store.submitted.version + 1;
  const lines = orderLines(order);
  const message = [
    `Serve: ${order.time} · ${order.place}`,
    '',
    ...lines.map(l => `${l.drink ? '☕' : '•'} ${l.name}${l.detail ? ` — ${l.detail}` : ''}`),
    ...(order.notes.trim() ? ['', `Note: ${order.notes.trim()}`] : []),
    '',
    `Total due: ${totalDue(lines)}`,
  ].join('\n');

  try {
    // No Content-Type header on purpose: text/plain keeps this a "simple" CORS request (no preflight).
    const res = await fetch('https://ntfy.sh/', {
      method: 'POST',
      body: JSON.stringify({
        topic: NTFY_TOPIC,
        title: version === 1 ? 'Isabelle ordered breakfast!' : `Isabelle changed her order (v${version})`,
        message,
        tags: [version === 1 ? 'birthday' : 'pencil2'],
        priority: 4,
      }),
    });
    if (!res.ok) throw new Error(`ntfy ${res.status}: ${await res.text()}`);
  } catch (err) {
    console.error(err);
    btn.disabled = false;
    btn.textContent = label;
    toast('The kitchen printer jammed. Try again?');
    return;
  }

  store.submitted = { order: structuredClone(order), at: new Date().toISOString(), version };
  persist();
  btn.disabled = false;
  go('thanks');
  confetti();
});

show(location.hash.slice(1));
