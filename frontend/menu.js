const GRIDDLE_TOPPINGS = {
  key: 'toppings', label: 'Toppings', type: 'multi',
  choices: ['Strawberries', 'Blueberries', 'Banana', 'Nutella', 'Maple syrup', 'Whipped cream',
    'Chocolate chips', 'Rainbow sprinkles', 'Powdered sugar', 'Lemon & sugar'],
};

export const DRINKS = [
  { id: 'vanilla-latte', name: 'Vanilla Latte', desc: 'Espresso, steamed milk, vanilla.', price: [1, 'kiss'] },
  { id: 'iced-vanilla-latte', name: 'Iced Vanilla Latte', desc: 'The same, over ice.', price: [1, 'kiss'] },
  { id: 'raspberry-mocha', name: 'Raspberry Mocha Latte', desc: 'Chocolate, raspberry, espresso.', price: [2, 'kiss'] },
  { id: 'iced-raspberry-mocha', name: 'Iced Raspberry Mocha Latte', desc: 'The same, over ice.', price: [2, 'kiss'] },
  { id: 'acv-tea', name: 'Apple Cider Vinegar Tea', desc: 'Warm, tangy, virtuous.', price: [1, 'hug'] },
  { id: 'cappuccino', name: 'Cappuccino', desc: 'Equal parts espresso, milk and foam.', price: [1, 'kiss'] },
  { id: 'mimosa', name: 'Mimosa', desc: 'Bubbles and orange juice. It is your birthday.', price: [1, 'slow dance'] },
  { id: 'aperol-spritz', name: 'Aperol Spritz', desc: 'Aperol, prosecco, soda, orange.', price: [1, 'slow dance'] },
];

export const SECTIONS = [
  {
    id: 'sweet', title: 'Sweet', fill: 'var(--blossom)',
    note: 'Order as many as you like.',
    items: [
      { id: 'pancakes', name: 'Pancakes', desc: 'A fluffy stack, fresh off the griddle.', price: [3, 'kiss'], options: [GRIDDLE_TOPPINGS] },
      { id: 'waffles', name: 'Waffles', desc: 'Golden and crispy at the edges.', price: [3, 'kiss'], options: [GRIDDLE_TOPPINGS] },
      { id: 'crepes', name: 'Crêpes', desc: 'Thin, buttery, folded in quarters.', price: [3, 'kiss'], options: [GRIDDLE_TOPPINGS] },
      { id: 'french-toast', name: 'French Toast', desc: 'Custard-soaked, cinnamon-dusted.', price: [3, 'kiss'], options: [GRIDDLE_TOPPINGS] },
    ],
  },
  {
    id: 'bakery', title: 'From the Bakery Case', fill: 'var(--marigold)',
    note: 'Store-bought, not homemade. Warmed up with love, though.',
    items: [
      { id: 'cinnamon-buns', name: 'Cinnamon Buns', desc: 'Gooey, iced, store-bought.', price: [1, 'hug'], storeBought: true },
      { id: 'croissant', name: 'Plain Croissant', desc: 'Flaky, buttery, store-bought.', price: [1, 'hug'], storeBought: true },
      { id: 'choc-croissant', name: 'Chocolate Croissant', desc: 'Pain au chocolat, store-bought.', price: [1, 'hug'], storeBought: true },
    ],
  },
  {
    id: 'savoury', title: 'Savoury', fill: 'var(--jade)',
    note: 'Order as many as you like.',
    items: [
      {
        id: 'toast', name: 'Toast', desc: 'Two slices, toasted just right.', price: [1, 'kiss'],
        options: [{ key: 'spread', label: 'Topped with', type: 'multi', required: true, missing: 'Toast: pick a topping (plain counts)',
          choices: ['Avocado', 'Nutella', 'Peanut butter', 'Butter & jam', 'Plain'] }],
      },
      {
        id: 'eggs', name: 'Eggs', desc: 'Any style you like.', price: [2, 'kiss'],
        options: [{ key: 'style', label: 'How would you like them?', type: 'text', required: true, missing: 'Eggs: how would you like them cooked?',
          placeholder: 'e.g. two, over easy' }],
      },
      {
        id: 'benny', name: 'Eggs Benedict', desc: 'English muffin, poached eggs, hollandaise.', price: [1, 'foot rub'],
        options: [{ key: 'toppings', label: 'Toppings', type: 'multi',
          choices: ['Canadian bacon', 'Bacon', 'Avocado', 'Tomato', 'Spinach', 'Extra hollandaise'] }],
      },
      {
        id: 'sandwich', name: 'Breakfast Sandwich', desc: 'Stacked and griddled.', price: [2, 'hug'],
        options: [
          { key: 'bread', label: 'On a', type: 'single', required: true, missing: 'Breakfast Sandwich: pick a bread', choices: ['English muffin', 'Bagel', 'Croissant'] },
          { key: 'fillings', label: 'Fillings', type: 'multi', choices: ['Egg', 'Cheese', 'Bacon', 'Sausage', 'Avocado'] },
        ],
      },
      {
        id: 'bagel', name: 'Bagel & Cream Cheese', desc: 'Toasted, generously schmeared.', price: [1, 'hug'],
        options: [{ key: 'extras', label: 'Extras', type: 'multi',
          choices: ['Tomato', 'Cucumber', 'Red onion', 'Everything seasoning'] }],
      },
      {
        id: 'burrito', name: 'Breakfast Burrito', desc: 'Wrapped tight, griddled crisp.', price: [1, 'back scratch'],
        options: [{ key: 'fillings', label: 'Fillings', type: 'multi',
          choices: ['Egg', 'Cheese', 'Hashbrown', 'Bacon', 'Sausage', 'Avocado', 'Salsa', 'Sour cream', 'Hot sauce'] }],
      },
    ],
  },
  {
    id: 'sides', title: 'Sides', fill: 'var(--peri)',
    note: 'Pile them on.',
    items: [
      { id: 'hashbrowns', name: 'Hashbrowns', desc: 'Crispy, golden.', price: [1, 'kiss'] },
      { id: 'sausage', name: 'Sausage', desc: 'Breakfast links.', price: [1, 'kiss'] },
      { id: 'bacon', name: 'Bacon', desc: 'As crispy as you want it.', price: [1, 'kiss'] },
    ],
  },
  {
    id: 'girl', title: 'Girl Breakfast', fill: 'var(--coral)',
    note: 'No judgement at this establishment.',
    items: [
      { id: 'ben-jerrys', name: "Ben & Jerry's", desc: 'Straight from the pint.', price: [1, 'cuddle'] },
      { id: 'sv-chips', name: 'Salt & Vinegar Chips', desc: 'Lip-puckering.', price: [1, 'cuddle'] },
      { id: 'takis', name: 'Takis', desc: 'Rolled, fiery.', price: [1, 'cuddle'] },
      { id: 'oreos', name: 'Oreos', desc: 'Twist, lick, dunk.', price: [1, 'cuddle'] },
      { id: 'digestives', name: 'Digestive Cookies', desc: 'Tea-time classic.', price: [1, 'cuddle'] },
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
