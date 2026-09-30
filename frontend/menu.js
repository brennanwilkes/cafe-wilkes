// Descriptions only list what's in a dish when the name alone is unclear. Never flavour text.
const GRIDDLE_TOPPINGS = {
  key: 'toppings', label: 'Toppings', type: 'multi',
  choices: ['Strawberries', 'Nutella', 'Maple syrup', 'Whipped cream', 'Chocolate chips', 'Powdered sugar', 'Lemon & sugar'],
};

export const DRINKS = [
  { id: 'vanilla-latte', name: 'Vanilla Latte', doodle: { name: 'cup', x: 74, y: 32, tilt: -12, size: 70 }, price: [1, 'kiss'] },
  { id: 'iced-vanilla-latte', name: 'Iced Vanilla Latte', price: [1, 'kiss'] },
  { id: 'raspberry-mocha', name: 'Raspberry Mocha Latte', price: [2, 'kiss'] },
  { id: 'iced-raspberry-mocha', name: 'Iced Raspberry Mocha Latte', doodle: { name: 'iced', x: 58, y: -8, tilt: 10, size: 64 }, price: [2, 'kiss'] },
  { id: 'acv-tea', name: 'Apple Cider Vinegar Tea', doodle: { name: 'tea', x: 80, y: 42, tilt: -8, size: 62 }, desc: 'In case you’re feeling a bit off', price: [1, 'hug'] },
  { id: 'cappuccino', name: 'Cappuccino', price: [1, 'kiss'] },
  { id: 'mimosa', name: 'Mimosa', doodle: { name: 'flute', x: 40, y: -6, tilt: 14, size: 66 }, desc: 'Prosecco & orange juice', price: [1, 'living room dance'] },
  { id: 'aperol-spritz', name: 'Aperol Spritz', doodle: { name: 'spritz', x: 70, y: 40, tilt: -10, size: 72 }, desc: 'Aperol, prosecco & soda', price: [1, 'living room dance'] },
];

export const SECTIONS = [
  {
    id: 'sweet', title: 'Sweet', fill: 'var(--blossom)', ink: 'var(--blossom-ink)', note: 'Pick as many as you like',
    items: [
      { id: 'pancakes', name: 'Pancakes', doodle: { name: 'pancakes', x: 64, y: -8, tilt: 8, size: 72 }, price: [3, 'kiss'], options: [GRIDDLE_TOPPINGS] },
      { id: 'waffles', name: 'Waffles', doodle: { name: 'waffle', x: 82, y: 34, tilt: -14, size: 60 }, price: [1, 'living room dance'], options: [GRIDDLE_TOPPINGS] },
      { id: 'crepes', name: 'Crêpes', price: [3, 'kiss'], options: [GRIDDLE_TOPPINGS] },
      { id: 'french-toast', name: 'French Toast', price: [3, 'kiss'], options: [GRIDDLE_TOPPINGS] },
    ],
  },
  {
    id: 'bakery', title: 'Bakery Case', fill: 'var(--marigold)', ink: 'var(--marigold-ink)', note: 'Not homemade',
    items: [
      { id: 'cinnamon-buns', name: 'Cinnamon Buns', doodle: { name: 'bun', x: 56, y: 42, tilt: 10, size: 64 }, price: [1, 'hug'], storeBought: true },
      { id: 'croissant', name: 'Plain Croissant', price: [1, 'hug'], storeBought: true },
      { id: 'choc-croissant', name: 'Chocolate Croissant', doodle: { name: 'croissant', x: 76, y: -8, tilt: -8, size: 72 }, price: [1, 'hug'], storeBought: true },
    ],
  },
  {
    id: 'savoury', title: 'Savoury', fill: 'var(--jade)', ink: 'var(--jade-ink)', note: 'Pick as many as you like',
    items: [
      {
        id: 'toast', name: 'Toast', doodle: { name: 'toast', x: 46, y: 36, tilt: -10, size: 62 }, price: [1, 'kiss'],
        options: [{ key: 'spread', label: 'Topped with', type: 'multi', required: true, missing: 'Toast: pick a topping (plain counts)',
          choices: ['Avocado', 'Nutella', 'Peanut butter', 'Fruit jelly', 'Plain'] }],
      },
      {
        id: 'eggs', name: 'Eggs', doodle: { name: 'egg', x: 80, y: -10, tilt: 12, size: 70 }, price: [2, 'kiss'],
        options: [{ key: 'style', label: 'How would you like them?', type: 'text', required: true,
          missing: 'Eggs: how would you like them cooked?', placeholder: 'e.g. two, over easy' }],
      },
      {
        id: 'benny', name: 'Eggs Benedict', desc: 'Poached eggs, hollandaise, English muffin', price: [1, 'living room dance'],
        options: [{ key: 'toppings', label: 'Toppings', type: 'multi',
          choices: ['Ham', 'Bacon', 'Avocado', 'Tomato', 'Spinach', 'Extra hollandaise'] }],
      },
      {
        id: 'sandwich', name: 'Breakfast Sandwich', price: [2, 'hug'],
        options: [
          { key: 'bread', label: 'On a', type: 'single', required: true, missing: 'Breakfast Sandwich: pick a bread',
            choices: ['English muffin', 'Bagel', 'Croissant'] },
          { key: 'fillings', label: 'Fillings', type: 'multi', choices: ['Egg', 'Cheese', 'Bacon', 'Sausage', 'Avocado'] },
        ],
      },
      {
        id: 'bagel', name: 'Bagel & Cream Cheese', doodle: { name: 'bagel', x: 62, y: 38, tilt: -6, size: 64 }, price: [1, 'hug'],
        options: [{ key: 'extras', label: 'Extras', type: 'multi',
          choices: ['Tomato', 'Cucumber', 'Red onion', 'Everything seasoning'] }],
      },
      {
        id: 'burrito', name: 'Breakfast Burrito', price: [1, 'living room dance'],
        options: [{ key: 'fillings', label: 'Fillings', type: 'multi',
          choices: ['Egg', 'Cheese', 'Hashbrown', 'Bacon', 'Sausage', 'Avocado', 'Salsa', 'Sour cream', 'Hot sauce'] }],
      },
    ],
  },
  {
    id: 'sides', title: 'Sides', fill: 'var(--peri)', ink: 'var(--peri-ink)', note: 'Pile them on',
    items: [
      { id: 'hashbrowns', name: 'Hashbrowns', price: [1, 'kiss'] },
      { id: 'sausage', name: 'Sausage', price: [1, 'kiss'] },
      { id: 'bacon', name: 'Bacon', price: [1, 'kiss'] },
    ],
  },
  {
    id: 'girl', title: 'Girl Breakfast', fill: 'var(--coral)', ink: 'var(--coral-ink)', note: 'No judgement here',
    items: [
      { id: 'ben-jerrys', name: "Ben & Jerry's", doodle: { name: 'pint', x: 54, y: 36, tilt: -12, size: 66 }, price: [1, 'living room dance'] },
      { id: 'sv-chips', name: 'Salt & Vinegar Chips', price: [1, 'cuddle'] },
      { id: 'takis', name: 'Takis', doodle: { name: 'chips', x: 78, y: -8, tilt: 10, size: 64 }, price: [1, 'cuddle'] },
      { id: 'oreos', name: 'Oreos', price: [1, 'cuddle'] },
      { id: 'digestives', name: 'Digestive Cookies', doodle: { name: 'cookie', x: 42, y: 38, tilt: 6, size: 60 }, price: [1, 'cuddle'] },
    ],
  },
];

const times = [];
for (let m = 8 * 60 + 30; m <= 13 * 60; m += 30) {
  const h = Math.floor(m / 60);
  times.push(`${h > 12 ? h - 12 : h}:${String(m % 60).padStart(2, '0')} ${h >= 12 ? 'pm' : 'am'}`);
}
export const SERVE_TIMES = [...times, 'Wake me when it’s ready'];

export const PLACES = ['In bed', 'Dinner table', 'Living room couch', 'Patio'];

export const ITEMS = new Map(SECTIONS.flatMap(s => s.items.map(i => [i.id, i])));
export const DRINKS_BY_ID = new Map(DRINKS.map(d => [d.id, d]));
