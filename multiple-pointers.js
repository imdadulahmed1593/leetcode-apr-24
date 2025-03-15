// mulitple pointer lets you get rid of nested loops which reduces the time complexity
// Count Unique Values
// Implement a function "CountUniqueValues" that takes in an array of numbers and returns the number of unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// test Cases:
// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

// SC - O(1), TC - O(N)
// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0;
//   let i = 0;
//   let count = 1;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       count++;
//       arr[i] = arr[j];
//     }
//   }
//   return count;
// }

// A bit trickier approach - without using count
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// SC - O(N), TC - O(N)
// My soln - with frequency counter
// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0;
//   let i = 0;
//   let fc = {};
//   for (let elem of arr) {
//     fc[elem] = ++fc[elem] || 1;
//   }
//   return Object.keys(fc).length;
// }

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
