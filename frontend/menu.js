// Descriptions only list what's in a dish when the name alone is unclear. Never flavour text.
const GRIDDLE_TOPPINGS = {
  key: 'toppings', label: 'Toppings', type: 'multi',
  choices: ['Strawberries', 'Nutella', 'Maple syrup', 'Whipped cream', 'Chocolate chips', 'Powdered sugar', 'Lemon & sugar'],
};

export const DRINKS = [
  { id: 'vanilla-latte', name: 'Vanilla Latte', doodle: { name: 'cup', x: 84, tilt: 12, size: 38 }, price: [1, 'kiss'] },
  { id: 'iced-vanilla-latte', name: 'Iced Vanilla Latte', price: [1, 'kiss'] },
  { id: 'raspberry-mocha', name: 'Raspberry Mocha Latte', price: [2, 'kiss'] },
  { id: 'iced-raspberry-mocha', name: 'Iced Raspberry Mocha Latte', doodle: { name: 'iced', x: 20, tilt: -10, size: 34 }, price: [2, 'kiss'] },
  { id: 'acv-tea', name: 'Apple Cider Vinegar Tea', desc: 'In case you’re feeling a bit off', price: [1, 'hug'] },
  { id: 'cappuccino', name: 'Cappuccino', price: [1, 'kiss'] },
  { id: 'mimosa', name: 'Mimosa', desc: 'Prosecco & orange juice', price: [1, 'slow dance'] },
  { id: 'aperol-spritz', name: 'Aperol Spritz', desc: 'Aperol, prosecco & soda', doodle: { name: 'spritz', x: 62, tilt: 8, size: 40 }, price: [1, 'slow dance'] },
];

export const SECTIONS = [
  {
    id: 'sweet', title: 'Sweet', fill: 'var(--blossom)', note: 'Pick as many as you like',
    items: [
      { id: 'pancakes', name: 'Pancakes', doodle: { name: 'pancakes', x: 88, tilt: -8, size: 40 }, price: [3, 'kiss'], options: [GRIDDLE_TOPPINGS] },
      { id: 'waffles', name: 'Waffles', price: [3, 'kiss'], options: [GRIDDLE_TOPPINGS] },
      { id: 'crepes', name: 'Crêpes', doodle: { name: 'crepe', x: 32, tilt: 14, size: 32 }, price: [3, 'kiss'], options: [GRIDDLE_TOPPINGS] },
      { id: 'french-toast', name: 'French Toast', price: [3, 'kiss'], options: [GRIDDLE_TOPPINGS] },
    ],
  },
  {
    id: 'bakery', title: 'Bakery Case', fill: 'var(--marigold)', note: 'Not homemade',
    items: [
      { id: 'cinnamon-buns', name: 'Cinnamon Buns', price: [1, 'hug'], storeBought: true },
      { id: 'croissant', name: 'Plain Croissant', price: [1, 'hug'], storeBought: true },
      { id: 'choc-croissant', name: 'Chocolate Croissant', doodle: { name: 'croissant', x: 72, tilt: -6, size: 38 }, price: [1, 'hug'], storeBought: true },
    ],
  },
  {
    id: 'savoury', title: 'Savoury', fill: 'var(--jade)', note: 'Pick as many as you like',
    items: [
      {
        id: 'toast', name: 'Toast', price: [1, 'kiss'],
        options: [{ key: 'spread', label: 'Topped with', type: 'multi', required: true, missing: 'Toast: pick a topping (plain counts)',
          choices: ['Avocado', 'Nutella', 'Peanut butter', 'Fruit jelly', 'Plain'] }],
      },
      {
        id: 'eggs', name: 'Eggs', doodle: { name: 'egg', x: 14, tilt: 10, size: 36 }, price: [2, 'kiss'],
        options: [{ key: 'style', label: 'How would you like them?', type: 'text', required: true,
          missing: 'Eggs: how would you like them cooked?', placeholder: 'e.g. two, over easy' }],
      },
      {
        id: 'benny', name: 'Eggs Benedict', desc: 'Poached eggs, hollandaise, English muffin', price: [1, 'foot rub'],
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
        id: 'bagel', name: 'Bagel & Cream Cheese', price: [1, 'hug'],
        options: [{ key: 'extras', label: 'Extras', type: 'multi',
          choices: ['Tomato', 'Cucumber', 'Red onion', 'Everything seasoning'] }],
      },
      {
        id: 'burrito', name: 'Breakfast Burrito', doodle: { name: 'burrito', x: 84, tilt: -14, size: 38 }, price: [1, 'back scratch'],
        options: [{ key: 'fillings', label: 'Fillings', type: 'multi',
          choices: ['Egg', 'Cheese', 'Hashbrown', 'Bacon', 'Sausage', 'Avocado', 'Salsa', 'Sour cream', 'Hot sauce'] }],
      },
    ],
  },
  {
    id: 'sides', title: 'Sides', fill: 'var(--peri)', note: 'Pile them on',
    items: [
      { id: 'hashbrowns', name: 'Hashbrowns', price: [1, 'kiss'] },
      { id: 'sausage', name: 'Sausage', price: [1, 'kiss'] },
      { id: 'bacon', name: 'Bacon', doodle: { name: 'bacon', x: 42, tilt: 8, size: 34 }, price: [1, 'kiss'] },
    ],
  },
  {
    id: 'girl', title: 'Girl Breakfast', fill: 'var(--coral)', note: 'No judgement here',
    items: [
      { id: 'ben-jerrys', name: "Ben & Jerry's", doodle: { name: 'pint', x: 78, tilt: -10, size: 38 }, price: [1, 'cuddle'] },
      { id: 'sv-chips', name: 'Salt & Vinegar Chips', price: [1, 'cuddle'] },
      { id: 'takis', name: 'Takis', doodle: { name: 'chips', x: 24, tilt: 12, size: 32 }, price: [1, 'cuddle'] },
      { id: 'oreos', name: 'Oreos', price: [1, 'cuddle'] },
      { id: 'digestives', name: 'Digestive Cookies', price: [1, 'cuddle'] },
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
