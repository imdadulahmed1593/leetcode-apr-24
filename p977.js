// 977. Squares of a Sorted Array (Two pointer)
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// naive approach
// var sortedSquares = function (nums) {
//   let squaredArr = nums.map((num) => Math.pow(num, 2));

//   return squaredArr.sort((a, b) => a - b);
// };

// two pointer approach
var sortedSquares = function (nums) {
  const n = nums.length;
  const ans = new Array(n);
  let start = 0,
    end = n - 1;
  for (let i = n - 1; i >= 0; i--) {
    if (Math.abs(nums[start]) >= Math.abs(nums[end])) {
      ans[i] = nums[start] * nums[start];
      start++;
    } else {
      ans[i] = nums[end] * nums[end];
      end--;
    }
  }
  return ans;
};
