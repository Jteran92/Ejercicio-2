/**
 * @function BinarySearch
 * @description Search the integer inside the sorted integers array using Binary Search Algorithm.
 * @param {Integer[]} arr - sorted array of integers
 * @param {Integer} low - The input integer
 * @param {Integer} high - The input integer
 * @param {Integer} searchValue - The input integer
 * @return {Integer} - return index of searchValue if found else return -1.
 * @see [BinarySearch](https://en.wikipedia.org/wiki/Binary_search_algorithm)
 */

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Encontramos el elemento, devolvemos su índice
      } else if (arr[mid] < target) {
        left = mid + 1; // El elemento está en la mitad derecha
      } else {
        right = mid - 1; // El elemento está en la mitad izquierda
      }
    }
  
    return -1; // El elemento no está en el array
  }
  
  module.exports = binarySearch;
  