/**
 * @function Palindrome
 * @description Check whether the given string is Palindrome or not.
 * @param {String} str - The input string
 * @return {Boolean}.
 * @see [Palindrome](https://en.wikipedia.org/wiki/Palindrome)
 */

function isPalindrome(str) {
    // Eliminamos espacios y convertimos a minúsculas para hacer la comparación insensible a mayúsculas y minúsculas
    const cleanStr = str.toLowerCase().replace(/\s/g, '');
  
    // Comparamos la cadena original con su versión invertida
    return cleanStr === cleanStr.split('').reverse().join('');
  }
  
  module.exports = isPalindrome;