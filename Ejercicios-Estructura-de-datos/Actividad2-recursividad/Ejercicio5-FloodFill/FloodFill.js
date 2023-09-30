/**
 * Flood fill.
 *
 * Flood fill, also called seed fill, is an algorithm that determines and alters the area connected to a given node in a
 * multi-dimensional array with some matching attribute. It is used in the "bucket" fill tool of paint programs to fill
 * connected, similarly-colored areas with a different color.
 *
 * (description adapted from https://en.wikipedia.org/wiki/Flood_fill)
 * @see https://www.techiedelight.com/flood-fill-algorithm/
 */

function floodFill(matrix, startRow, startCol, newColor) {
    const originalColor = matrix[startRow][startCol];
  
    // Verifica si el color original es igual al nuevo color
    if (originalColor === newColor) {
      return matrix;
    }
  
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    // Función auxiliar para realizar el llenado de manera recursiva
    function fill(row, col) {
      // Verifica si la posición está dentro de la matriz y si el color es el mismo que el original
      if (
        row >= 0 && row < rows &&
        col >= 0 && col < cols &&
        matrix[row][col] === originalColor
      ) {
        // Cambia el color de la posición actual
        matrix[row][col] = newColor;
  
        // Llena recursivamente en las direcciones adyacentes
        fill(row - 1, col); // Arriba
        fill(row + 1, col); // Abajo
        fill(row, col - 1); // Izquierda
        fill(row, col + 1); // Derecha
      }
    }
  
    // Inicia el proceso de llenado desde la posición inicial
    fill(startRow, startCol);
  
    return matrix;
  }
  
  module.exports = floodFill;
  