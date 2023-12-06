/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^a-z0-9]/gi,'')
  let newStr = str.toLowerCase();
  let arr = newStr.split('');
  let newArr = arr.reverse();
  let newStr1 = newArr.join('');
  return newStr === newStr1;
}

module.exports = isPalindrome;
