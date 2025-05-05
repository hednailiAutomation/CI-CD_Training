const greet = require('../app');

test('greet returns correct greeting', () => {
  document.body.innerHTML = '<input id="name" value="Alice"><p id="greeting"></p>';
  expect(greet()).toBe('Hello, Alice!');
});

test('greet with empty input returns default', () => {
  document.body.innerHTML = '<input id="name" value=""><p id="greeting"></p>';
  expect(greet()).toBe('Hello, stranger!');
});