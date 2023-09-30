const letterCombinations = require('./Letter-Combinations');

test('Genera las combinaciones de letras correctamente', () => {
  const result = letterCombinations('23');
  const expected = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
  expect(result).toEqual(expected);
});

test('Genera las combinaciones de letras correctamente para dígitos vacíos', () => {
  const result = letterCombinations('');
  const expected = [];
  expect(result).toEqual(expected);
});

test('Genera las combinaciones de letras correctamente para dígitos con 1', () => {
  const result = letterCombinations('1');
  const expected = [];
  expect(result).toEqual(expected);
});