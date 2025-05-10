// 283. Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Naive solution - S.C is high
// function moveZeroes(nums) {
//   let arr1 = [];
//   let arr2 = [];
//   for (let num of nums) {
//     if (num === 0) {
//       arr1.push(num);
//     } else {
//       arr2.push(num);
//     }
//   }
//   return arr2.concat(arr1);
// }

// in-place solution - two pointer
let moveZeroes = function (nums) {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      // swap left & right values
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;

      left++;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
