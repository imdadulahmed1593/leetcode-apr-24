// 1. reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// function reverse(str) {
//   let result = "";

//   function helper(s) {
//     if (s.length === 0) return;
//     result = result + s[s.length - 1];
//     helper(s.slice(0, s.length - 1));
//   }

//   helper(str);
//   return result;
// }

// console.log(reverse("awesome")); //emosewa
// console.log(reverse("rithmschool")); // 'loohcsmhtir'

// 2. isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

// function isPalindrome(str) {
//   //   if (str === reverse(str)) return true;
//   let result = "";

//   function helper(s) {
//     if (s.length === 0) return;
//     result = result + s[s.length - 1];
//     helper(s.slice(0, s.length - 1));
//   }

//   helper(str);
//   if (result === str) return true;
//   return false;
// }

// console.log(isPalindrome("awesome")); // false
// console.log(isPalindrome("foobar")); // false
// console.log(isPalindrome("tacocat")); // true
// console.log(isPalindrome("amanaplanacanalpanama")); // true
// console.log(isPalindrome("amanaplanacanalpandemonium")); // false

// 3. someRecursive
// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

// const isOdd = (val) => val % 2 !== 0;

// function someRecursive(arr, cb) {
//   if (arr.length === 0) return false;

//   if (cb(arr[0])) return true;

//   return someRecursive(arr.slice(1), cb);
// }

// console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
// console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
// console.log(someRecursive([4, 6, 8], isOdd)); // false
// console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false

// 4. flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// function flatten(arr) {
//   let result = [];

//   function helper(arr) {
//     if (arr.length === 0) return;
//     if (typeof arr[0] !== "object") result.push(arr[0]);
//     if (typeof arr[0] === "object") helper(arr[0]);
//     helper(arr.slice(1));
//   }

//   helper(arr);

//   return result;
// }

//another solution
// function flatten(oldArr) {
//   var newArr = [];
//   for (var i = 0; i < oldArr.length; i++) {
//     if (Array.isArray(oldArr[i])) {
//       newArr = newArr.concat(flatten(oldArr[i]));
//     } else {
//       newArr.push(oldArr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1], [2], [3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

// 5.capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeFirst(arr) {
  let result = [];

  function helper(arr) {
    if (arr.length === 0) return;
    result.push(arr[0][0].toUpperCase() + arr[0].slice(1));
    helper(arr.slice(1));
  }

  helper(arr);
  return result;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
