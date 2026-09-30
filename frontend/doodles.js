// Hand-drawn-ish line doodles, 32×32, ink stroke + a flat fill. Keep them this simple.
const S = 'stroke="#2e2a24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
const svg = body => `<svg viewBox="0 0 32 32" aria-hidden="true" fill="none" ${S}>${body}</svg>`;

export const DOODLES = {
  cup: svg(`<path d="M12 3.5q-2 2 0 4M17 3.5q-2 2 0 4"/>
    <path d="M6.5 11.5h16v8a7 7 0 0 1-7 7h-2a7 7 0 0 1-7-7z" fill="#e3c19a"/>
    <path d="M22.5 13.5h2a3 3 0 0 1 0 6h-2"/><path d="M5 28.5h19"/>`),
  iced: svg(`<path d="M20 2.5l-2.5 12" stroke="#ff5470" stroke-width="2.6"/>
    <path d="M8 9.5h16l-2 18h-12z" fill="#dcebf0"/>
    <rect x="11" y="15" width="4.5" height="4.5" fill="#fff" transform="rotate(-10 13 17)"/>
    <rect x="16.5" y="19" width="4.5" height="4.5" fill="#fff" transform="rotate(12 18 21)"/>`),
  spritz: svg(`<path d="M8.5 6.5h15q0 11-7.5 11.5q-7.5-.5-7.5-11.5z" fill="#ff8a3d"/>
    <path d="M16 18v8.5M11 27.5h10"/><circle cx="22" cy="6" r="3.5" fill="#ffc145"/><path d="M22 3v6M19 6h6"/>`),
  pancakes: svg(`<rect x="4.5" y="22.5" width="23" height="5" rx="2.5" fill="#f1c27d"/>
    <rect x="5.5" y="17.5" width="21" height="5" rx="2.5" fill="#f1c27d"/>
    <rect x="6.5" y="12.5" width="19" height="5" rx="2.5" fill="#f1c27d"/>
    <path d="M9 13c3-1 9-1 13 0v3.5q-1 1.5-2 0v-1.5q-1 3-2.2 0" fill="#b86a2c"/>
    <rect x="13" y="8" width="6" height="4.5" fill="#ffc145"/>`),
  crepe: svg(`<path d="M4 25.5h24L16 7z" fill="#f5d7a1"/><path d="M16 7l-3 18.5"/>
    <circle cx="21" cy="21" r="2.5" fill="#ff5470"/>`),
  croissant: svg(`<path d="M3.5 21Q16 3 28.5 21q-6-3-12.5-2.5Q9.5 18 3.5 21z" fill="#e8a857"/>
    <path d="M10.5 12.5l2.5 6M16 10v8.5M21.5 12.5l-2.5 6"/>`),
  egg: svg(`<path d="M5.5 16q0-9 9-9.5q5-3 9.5 1.5q4.5 4 2.5 9.5q.5 8-8 8.5q-5 3-9.5-1q-4-2-3.5-9z" fill="#fffdf6"/>
    <circle cx="16" cy="16" r="4.5" fill="#ffc145"/>`),
  burrito: svg(`<g transform="rotate(-28 16 16)"><rect x="3.5" y="10.5" width="25" height="11" rx="5.5" fill="#f1d9a8"/>
    <ellipse cx="25.5" cy="16" rx="3" ry="5.5" fill="#3dbe8b"/><path d="M10 11v10M15 11v10" stroke-width="1.4"/></g>`),
  bacon: svg(`<path d="M3.5 12q4-4 8 0t8 0t9-1v8q-5 1-9 1t-8 0t-8 0z" fill="#ff5470"/>
    <path d="M5 16.5q3.5-3 7 0t7 0t8-.8" stroke="#fbe3e3" stroke-width="1.8"/>`),
  pint: svg(`<path d="M7.5 11.5h17l-2 16h-13z" fill="#ffa8b6"/><rect x="6.5" y="7.5" width="19" height="4" rx="1" fill="#f4f0e6"/>
    <path d="M9 17.5h14l-.6 5h-12.8z" fill="#fff"/>`),
  chips: svg(`<path d="M8.5 4.5h15l-1 3 1 3v14l1 3h-17l1-3v-14l-1-3z" fill="#7c8cff"/>
    <circle cx="16" cy="17" r="4" fill="#ffc145"/><path d="M8.5 7.5h15M8.5 24.5h15" stroke-dasharray="1 2" stroke-width="1.4"/>`),
};
