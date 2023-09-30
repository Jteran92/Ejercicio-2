/*
 *
 *  Letter Combinations of a Phone Number
 *
 *  Given a string containing digits from 2-9 inclusive,
 *  return all possible letter combinations that the number could represent.
 *  Return the answer in any order.

 *  A mapping of digits to letters (just like on the telephone buttons) is given below.
 *  Note that 1 does not map to any letters.
 *  More info: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 */

function letterCombinations(digits) {
    const digitMap = {
      '2': ['a', 'b', 'c'],
      '3': ['d', 'e', 'f'],
      '4': ['g', 'h', 'i'],
      '5': ['j', 'k', 'l'],
      '6': ['m', 'n', 'o'],
      '7': ['p', 'q', 'r', 's'],
      '8': ['t', 'u', 'v'],
      '9': ['w', 'x', 'y', 'z']
    };
  
    const result = [];
  
    function generateCombinations(currentIndex, currentCombination) {
      if (currentIndex === digits.length) {
        if (currentCombination.length > 0) {
          result.push(currentCombination);
        }
        return;
      }
  
      const currentDigit = digits[currentIndex];
      const letters = digitMap[currentDigit] || [];
  
      for (const letter of letters) {
        generateCombinations(currentIndex + 1, currentCombination + letter);
      }
    }
  
    if (digits.length > 0) {
      generateCombinations(0, '');
    }
  
    return result;
  }
  
  module.exports = letterCombinations;
  