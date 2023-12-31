/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let str = str1.toLowerCase();
  let arr = str.split('');
  arr = arr.sort();
  str = arr.join('');
  let newStr = str2.toLowerCase();
  let newArr = newStr.split('');
  newArr = newArr.sort();
  newStr = newArr.join('');
  return str === newStr;
}

module.exports = isAnagram;
