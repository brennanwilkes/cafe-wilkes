// Hand-drawn-ish line doodles, 32×32, ink stroke + a flat fill. Keep them this simple.
const S = 'stroke="#2e2a24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
const svg = body => `<svg viewBox="0 0 32 32" aria-hidden="true" fill="none" ${S}>${body}</svg>`;

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
  crepe: svg(`<path d="M4 25.5h24L16 7z" fill="#f5d7a1"/><path d="M16 7l-3 18.5"/>
    <circle cx="21" cy="21" r="2.5" fill="#ff5470"/>`),
  frenchToast: svg(`<path d="M7 27V14a6 6 0 0 1 3-9h12a6 6 0 0 1 3 9v13z" fill="#e6a85c"/>
    <path d="M10 11h12" stroke-dasharray="0 4"/><path d="M11 16h10v3q-1 2-2 0v-1q-1 3-2.5 0" fill="#b86a2c"/>`),
  toast: svg(`<path d="M7 27V14a6 6 0 0 1 3-9h12a6 6 0 0 1 3 9v13z" fill="#e6b36b"/>
    <path d="M10.5 25.5v-10a4 4 0 0 1 2-6.5h7a4 4 0 0 1 2 6.5v10z" fill="#f6dfae" stroke="none"/>`),
  bun: svg(`<circle cx="16" cy="16" r="11.5" fill="#d9a066"/>
    <path d="M16 16a1.8 1.8 0 1 1 1.8 1.8a4.2 4.2 0 1 1-4.2-4.2a6.6 6.6 0 1 1 6.6 6.6"/>
    <path d="M8 9q3-2 5 0t5 0t5 1" stroke="#fff" stroke-width="2.4"/>`),
  croissant: svg(`<path d="M3.5 21Q16 3 28.5 21q-6-3-12.5-2.5Q9.5 18 3.5 21z" fill="#e8a857"/>
    <path d="M10.5 12.5l2.5 6M16 10v8.5M21.5 12.5l-2.5 6"/>`),
  egg: svg(`<path d="M5.5 16q0-9 9-9.5q5-3 9.5 1.5q4.5 4 2.5 9.5q.5 8-8 8.5q-5 3-9.5-1q-4-2-3.5-9z" fill="#fffdf6"/>
    <circle cx="16" cy="16" r="4.5" fill="#ffc145"/>`),
  benny: svg(`<ellipse cx="16" cy="24" rx="11.5" ry="4" fill="#e6b36b"/>
    <path d="M7.5 22.5q0-10 8.5-10t8.5 10z" fill="#fffdf6"/><path d="M9 17q7-7 14 0q-1 3-2.5 0q-2 3-3.5 0q-2 3-4 0q-2 2-4 0z" fill="#ffc145"/>`),
  sandwich: svg(`<path d="M5 14.5q0-8 11-8t11 8z" fill="#e6b36b"/>
    <path d="M4 17l3-2.5 3 2.5 3-2.5 3 2.5 3-2.5 3 2.5 3-2.5 3 2.5" stroke="#3dbe8b" stroke-width="2.4"/>
    <path d="M5 19.5h22l-4 3z" fill="#ffc145"/><rect x="5" y="22.5" width="22" height="5" rx="2.5" fill="#e6b36b"/>`),
  bagel: svg(`<circle cx="16" cy="16" r="11.5" fill="#d9a066"/><circle cx="16" cy="16" r="3.5" fill="#f4f0e6"/>
    <path d="M9 11l1 1M20 8.5l1.2.4M23 18l-.5 1.2M12 22l1 .8" stroke-width="1.6"/>`),
  burrito: svg(`<g transform="rotate(-28 16 16)"><rect x="3.5" y="10.5" width="25" height="11" rx="5.5" fill="#f1d9a8"/>
    <ellipse cx="25.5" cy="16" rx="3" ry="5.5" fill="#3dbe8b"/><path d="M10 11v10M15 11v10" stroke-width="1.4"/></g>`),
  hashbrown: svg(`<rect x="4.5" y="8.5" width="23" height="15" rx="6" fill="#e0a84e" transform="rotate(-8 16 16)"/>
    <path d="M9 13l3 4M13 11.5l4 5M18 11l3.5 4.5M21.5 11.5l2 2.5" stroke-width="1.6"/>`),
  sausage: svg(`<rect x="3.5" y="11.5" width="25" height="9" rx="4.5" fill="#b5563e" transform="rotate(-20 16 16)"/>
    <path d="M9 17.5q5-4 12-5" stroke="#f4f0e6" stroke-width="1.6" transform="rotate(-6 16 16)"/>`),
  bacon: svg(`<path d="M3.5 12q4-4 8 0t8 0t9-1v8q-5 1-9 1t-8 0t-8 0z" fill="#ff5470"/>
    <path d="M5 16.5q3.5-3 7 0t7 0t8-.8" stroke="#fbe3e3" stroke-width="1.8"/>`),
  pint: svg(`<path d="M7.5 11.5h17l-2 16h-13z" fill="#ffa8b6"/><rect x="6.5" y="7.5" width="19" height="4" rx="1" fill="#f4f0e6"/>
    <path d="M9 17.5h14l-.6 5h-12.8z" fill="#fff"/>`),
  chips: svg(`<path d="M8.5 4.5h15l-1 3 1 3v14l1 3h-17l1-3v-14l-1-3z" fill="#7c8cff"/>
    <circle cx="16" cy="17" r="4" fill="#ffc145"/><path d="M8.5 7.5h15M8.5 24.5h15" stroke-dasharray="1 2" stroke-width="1.4"/>`),
  cookie: svg(`<circle cx="16" cy="16" r="11.5" fill="#d9a066"/>
    <circle cx="12" cy="12" r="1.3" fill="#2e2a24" stroke="none"/><circle cx="19" cy="11" r="1.3" fill="#2e2a24" stroke="none"/>
    <circle cx="20" cy="19" r="1.3" fill="#2e2a24" stroke="none"/><circle cx="12.5" cy="19.5" r="1.3" fill="#2e2a24" stroke="none"/>`),
  oreo: svg(`<rect x="4.5" y="9.5" width="23" height="6" rx="3" fill="#3b2f2a"/><rect x="5.5" y="15.5" width="21" height="3" fill="#fffdf6"/>
    <rect x="4.5" y="18.5" width="23" height="6" rx="3" fill="#3b2f2a"/>`),
  bell: svg(`<path d="M5.5 23.5a10.5 10.5 0 0 1 21 0z" fill="#ffc145"/><path d="M3.5 26.5h25"/>
    <circle cx="16" cy="10.5" r="1.8" fill="#2e2a24"/><path d="M11 17.5a6 6 0 0 1 3-3" stroke="#fff"/>`),
};
