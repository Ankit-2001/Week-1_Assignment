/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(numbers.length === 0){
        return undefined;
    }
    const val = numbers.reduce((a,b) =>  Math.max(a, b), -Infinity);
    return val;
}

module.exports = findLargestElement;