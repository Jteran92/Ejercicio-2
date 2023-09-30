const isPalindrome = require('./Palindrome');

test('racecar es un palíndromo', () => {
  expect(isPalindrome('racecar')).toBe(true);
});

test('hello no es un palíndromo', () => {
  expect(isPalindrome('hello')).toBe(false);
});

test('A man a plan a canal Panama es un palíndromo', () => {
  expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
});

test('No lemon, no melon no es un palíndromo', () => {
  expect(isPalindrome('No lemon, no melon')).toBe(false);
});
