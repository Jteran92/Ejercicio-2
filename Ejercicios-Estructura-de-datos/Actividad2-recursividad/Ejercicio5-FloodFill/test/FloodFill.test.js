// floodFill.test.js

const floodFill = require('./FloodFill');

test('Llena la región contigua con el nuevo color', () => {
  const matrix = [
    [1, 1, 1, 1],
    [1, 1, 0, 1],
    [1, 0, 1, 0],
    [1, 0, 1, 1]
  ];

  const expectedMatrix = [
    [2, 2, 2, 2],
    [2, 2, 0, 2],
    [2, 0, 1, 0],
    [2, 0, 1, 1]
  ];

  const resultMatrix = floodFill(matrix, 1, 1, 2);
  expect(resultMatrix).toEqual(expectedMatrix);
});

test('No realiza cambios si el nuevo color es igual al color original', () => {
  const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ];

  const expectedMatrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ];

  const resultMatrix = floodFill(matrix, 1, 1, 1);
  resultMatrix == expectedMatrix;
});