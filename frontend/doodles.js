// Simple line doodles, 32×32. On the menu they're recoloured to one ink and run through the
// #stamp filter (index.html), so they read as faint rubber stamps behind the text.
const S = 'stroke="#2e2a24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
const svg = body => `<svg viewBox="0 0 32 32" aria-hidden="true" fill="none" ${S}><g filter="url(#stamp)">${body}</g></svg>`;

export const DOODLES = {
  cup: svg(`<path d="M12 3.5q-2 2 0 4M17 3.5q-2 2 0 4"/>
    <path d="M6.5 11.5h16v8a7 7 0 0 1-7 7h-2a7 7 0 0 1-7-7z" fill="#e3c19a"/>
    <path d="M22.5 13.5h2a3 3 0 0 1 0 6h-2"/><path d="M5 28.5h19"/>`),
  tea: svg(`<path d="M5.5 13.5h18v4a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8z" fill="#f4f0e6"/>
    <path d="M23.5 15h1.5a2.8 2.8 0 0 1 0 5.6h-2"/><path d="M14 13.5c0-4 3-6 6-5.5v5"/>
    <rect x="17.5" y="5.5" width="5" height="5" fill="#3dbe8b"/><path d="M4 28.5h21"/>`),
  iced: svg(`<path d="M20 2.5l-2.5 12" stroke="#ff5470" stroke-width="2.6"/>
    <path d="M8 9.5h16l-2 18h-12z" fill="#dcebf0"/>
    <rect x="11" y="15" width="4.5" height="4.5" fill="#fff" transform="rotate(-10 13 17)"/>
    <rect x="16.5" y="19" width="4.5" height="4.5" fill="#fff" transform="rotate(12 18 21)"/>`),
  flute: svg(`<path d="M11.5 3.5h9l-1 11a3.5 3.5 0 0 1-7 0z" fill="#ffc145"/>
    <path d="M16 18v9M12 28h8"/><circle cx="15" cy="9" r=".8" fill="#2e2a24" stroke="none"/>
    <circle cx="17.5" cy="12" r=".8" fill="#2e2a24" stroke="none"/>`),
  spritz: svg(`<path d="M8.5 6.5h15q0 11-7.5 11.5q-7.5-.5-7.5-11.5z" fill="#ff8a3d"/>
    <path d="M16 18v8.5M11 27.5h10"/><circle cx="22" cy="6" r="3.5" fill="#ffc145"/><path d="M22 3v6M19 6h6"/>`),
  pancakes: svg(`<rect x="4.5" y="22.5" width="23" height="5" rx="2.5" fill="#f1c27d"/>
    <rect x="5.5" y="17.5" width="21" height="5" rx="2.5" fill="#f1c27d"/>
    <rect x="6.5" y="12.5" width="19" height="5" rx="2.5" fill="#f1c27d"/>
    <path d="M9 13c3-1 9-1 13 0v3.5q-1 1.5-2 0v-1.5q-1 3-2.2 0" fill="#b86a2c"/>
    <rect x="13" y="8" width="6" height="4.5" fill="#ffc145"/>`),
  waffle: svg(`<rect x="5" y="5" width="22" height="22" rx="3" fill="#f1c27d" transform="rotate(-6 16 16)"/>
    <g transform="rotate(-6 16 16)"><path d="M12.3 5v22M19.7 5v22M5 12.3h22M5 19.7h22"/></g>`),
  bun: svg(`<circle cx="16" cy="16" r="11.5" fill="#d9a066"/>
    <path d="M16 16a1.8 1.8 0 1 1 1.8 1.8a4.2 4.2 0 1 1-4.2-4.2a6.6 6.6 0 1 1 6.6 6.6"/>
    <path d="M8 9q3-2 5 0t5 0t5 1" stroke="#fff" stroke-width="2.4"/>`),
  croissant: svg(`<path d="M3.5 21Q16 3 28.5 21q-6-3-12.5-2.5Q9.5 18 3.5 21z" fill="#e8a857"/>
    <path d="M10.5 12.5l2.5 6M16 10v8.5M21.5 12.5l-2.5 6"/>`),
  toast: svg(`<path d="M7 27V14a6 6 0 0 1 3-9h12a6 6 0 0 1 3 9v13z" fill="#e6b36b"/>
    <path d="M10.5 25.5v-10a4 4 0 0 1 2-6.5h7a4 4 0 0 1 2 6.5v10z" fill="#f6dfae" stroke="none"/>`),
  egg: svg(`<path d="M5.5 16q0-9 9-9.5q5-3 9.5 1.5q4.5 4 2.5 9.5q.5 8-8 8.5q-5 3-9.5-1q-4-2-3.5-9z" fill="#fffdf6"/>
    <circle cx="16" cy="16" r="4.5" fill="#ffc145"/>`),
  bagel: svg(`<circle cx="16" cy="16" r="11.5" fill="#d9a066"/><circle cx="16" cy="16" r="3.5" fill="#f4f0e6"/>
    <path d="M9 11l1 1M20 8.5l1.2.4M23 18l-.5 1.2M12 22l1 .8" stroke-width="1.6"/>`),
  pint: svg(`<path d="M7.5 11.5h17l-2 16h-13z" fill="#ffa8b6"/><rect x="6.5" y="7.5" width="19" height="4" rx="1" fill="#f4f0e6"/>
    <path d="M9 17.5h14l-.6 5h-12.8z" fill="#fff"/>`),
  chips: svg(`<path d="M8.5 4.5h15l-1 3 1 3v14l1 3h-17l1-3v-14l-1-3z" fill="#7c8cff"/>
    <circle cx="16" cy="17" r="4" fill="#ffc145"/><path d="M8.5 7.5h15M8.5 24.5h15" stroke-dasharray="1 2" stroke-width="1.4"/>`),
  cookie: svg(`<circle cx="16" cy="16" r="11.5" fill="#d9a066"/>
    <circle cx="12" cy="12" r="1.3" fill="#2e2a24" stroke="none"/><circle cx="19" cy="11" r="1.3" fill="#2e2a24" stroke="none"/>
    <circle cx="20" cy="19" r="1.3" fill="#2e2a24" stroke="none"/><circle cx="12.5" cy="19.5" r="1.3" fill="#2e2a24" stroke="none"/>`),
};
