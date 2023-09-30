const binarySearch = require('./BinarySearch');

test('Encuentra el índice del elemento en el array ordenado', () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)).toBe(6);
});

test('Devuelve -1 si el elemento no está en el array', () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)).toBe(-1);
});

test('Devuelve -1 si el array está vacío', () => {
  expect(binarySearch([], 5)).toBe(-1);
});