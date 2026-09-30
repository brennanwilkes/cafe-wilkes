// Descriptions only list what's in a dish when the name alone is unclear. Never flavour text.
const GRIDDLE_TOPPINGS = {
  key: 'toppings', label: 'Toppings', type: 'multi',
  choices: ['Strawberries', 'Nutella', 'Maple syrup', 'Whipped cream', 'Chocolate chips', 'Powdered sugar', 'Lemon & sugar'],
};

export const DRINKS = [
  { id: 'vanilla-latte', name: 'Vanilla Latte', doodle: 'cup', price: [1, 'kiss'] },
  { id: 'iced-vanilla-latte', name: 'Iced Vanilla Latte', doodle: 'iced', price: [1, 'kiss'] },
  { id: 'raspberry-mocha', name: 'Raspberry Mocha Latte', doodle: 'cup', price: [2, 'kiss'] },
  { id: 'iced-raspberry-mocha', name: 'Iced Raspberry Mocha Latte', doodle: 'iced', price: [2, 'kiss'] },
  { id: 'acv-tea', name: 'Apple Cider Vinegar Tea', desc: 'In case you’re feeling a bit off', doodle: 'tea', price: [1, 'hug'] },
  { id: 'cappuccino', name: 'Cappuccino', doodle: 'cup', price: [1, 'kiss'] },
  { id: 'mimosa', name: 'Mimosa', desc: 'Prosecco & orange juice', doodle: 'flute', price: [1, 'slow dance'] },
  { id: 'aperol-spritz', name: 'Aperol Spritz', desc: 'Aperol, prosecco & soda', doodle: 'spritz', price: [1, 'slow dance'] },
];

export const SECTIONS = [
  {
    id: 'sweet', title: 'Sweet', fill: 'var(--blossom)', doodle: 'pancakes', note: 'Pick as many as you like',
    items: [
      { id: 'pancakes', name: 'Pancakes', doodle: 'pancakes', price: [3, 'kiss'], options: [GRIDDLE_TOPPINGS] },
      { id: 'waffles', name: 'Waffles', doodle: 'waffle', price: [3, 'kiss'], options: [GRIDDLE_TOPPINGS] },
      { id: 'crepes', name: 'Crêpes', doodle: 'crepe', price: [3, 'kiss'], options: [GRIDDLE_TOPPINGS] },
      { id: 'french-toast', name: 'French Toast', doodle: 'frenchToast', price: [3, 'kiss'], options: [GRIDDLE_TOPPINGS] },
    ],
  },
  {
    id: 'bakery', title: 'Bakery Case', fill: 'var(--marigold)', doodle: 'croissant', note: 'Not homemade',
    items: [
      { id: 'cinnamon-buns', name: 'Cinnamon Buns', doodle: 'bun', price: [1, 'hug'], storeBought: true },
      { id: 'croissant', name: 'Plain Croissant', doodle: 'croissant', price: [1, 'hug'], storeBought: true },
      { id: 'choc-croissant', name: 'Chocolate Croissant', doodle: 'croissant', price: [1, 'hug'], storeBought: true },
    ],
  },
  {
    id: 'savoury', title: 'Savoury', fill: 'var(--jade)', doodle: 'egg', note: 'Pick as many as you like',
    items: [
      {
        id: 'toast', name: 'Toast', doodle: 'toast', price: [1, 'kiss'],
        options: [{ key: 'spread', label: 'Topped with', type: 'multi', required: true, missing: 'Toast: pick a topping (plain counts)',
          choices: ['Avocado', 'Nutella', 'Peanut butter', 'Fruit jelly', 'Plain'] }],
      },
      {
        id: 'eggs', name: 'Eggs', doodle: 'egg', price: [2, 'kiss'],
        options: [{ key: 'style', label: 'How would you like them?', type: 'text', required: true,
          missing: 'Eggs: how would you like them cooked?', placeholder: 'e.g. two, over easy' }],
      },
      {
        id: 'benny', name: 'Eggs Benedict', desc: 'Poached eggs, hollandaise, English muffin', doodle: 'benny', price: [1, 'foot rub'],
        options: [{ key: 'toppings', label: 'Toppings', type: 'multi',
          choices: ['Ham', 'Bacon', 'Avocado', 'Tomato', 'Spinach', 'Extra hollandaise'] }],
      },
      {
        id: 'sandwich', name: 'Breakfast Sandwich', doodle: 'sandwich', price: [2, 'hug'],
        options: [
          { key: 'bread', label: 'On a', type: 'single', required: true, missing: 'Breakfast Sandwich: pick a bread',
            choices: ['English muffin', 'Bagel', 'Croissant'] },
          { key: 'fillings', label: 'Fillings', type: 'multi', choices: ['Egg', 'Cheese', 'Bacon', 'Sausage', 'Avocado'] },
        ],
      },
      {
        id: 'bagel', name: 'Bagel & Cream Cheese', doodle: 'bagel', price: [1, 'hug'],
        options: [{ key: 'extras', label: 'Extras', type: 'multi',
          choices: ['Tomato', 'Cucumber', 'Red onion', 'Everything seasoning'] }],
      },
      {
        id: 'burrito', name: 'Breakfast Burrito', doodle: 'burrito', price: [1, 'back scratch'],
        options: [{ key: 'fillings', label: 'Fillings', type: 'multi',
          choices: ['Egg', 'Cheese', 'Hashbrown', 'Bacon', 'Sausage', 'Avocado', 'Salsa', 'Sour cream', 'Hot sauce'] }],
      },
    ],
  },
  {
    id: 'sides', title: 'Sides', fill: 'var(--peri)', doodle: 'bacon', note: 'Pile them on',
    items: [
      { id: 'hashbrowns', name: 'Hashbrowns', doodle: 'hashbrown', price: [1, 'kiss'] },
      { id: 'sausage', name: 'Sausage', doodle: 'sausage', price: [1, 'kiss'] },
      { id: 'bacon', name: 'Bacon', doodle: 'bacon', price: [1, 'kiss'] },
    ],
  },
  {
    id: 'girl', title: 'Girl Breakfast', fill: 'var(--coral)', doodle: 'pint', note: 'No judgement here',
    items: [
      { id: 'ben-jerrys', name: "Ben & Jerry's", doodle: 'pint', price: [1, 'cuddle'] },
      { id: 'sv-chips', name: 'Salt & Vinegar Chips', doodle: 'chips', price: [1, 'cuddle'] },
      { id: 'takis', name: 'Takis', doodle: 'chips', price: [1, 'cuddle'] },
      { id: 'oreos', name: 'Oreos', doodle: 'oreo', price: [1, 'cuddle'] },
      { id: 'digestives', name: 'Digestive Cookies', doodle: 'cookie', price: [1, 'cuddle'] },
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
