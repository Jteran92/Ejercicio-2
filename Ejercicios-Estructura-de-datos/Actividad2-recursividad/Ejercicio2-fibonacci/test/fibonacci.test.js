// fibonacci.test.js

const fibonacci = require('../fibonacci');

test('Fibonacci de 0 es 0', () => {
  expect(fibonacci(0)).toBe(0);
});

test('Fibonacci de 1 es 1', () => {
  expect(fibonacci(1)).toBe(1);
});

test('Fibonacci de 2 es 1', () => {
  expect(fibonacci(2)).toBe(1);
});

test('Fibonacci de 6 es 8', () => {
  expect(fibonacci(6)).toBe(8);
});

test('Fibonacci de 10 es 55', () => {
  expect(fibonacci(10)).toBe(55);
});