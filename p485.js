// 485. Max Consecutive Ones
// Solved
// Easy
// Topics
// Companies
// Hint
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxOnesCount = 0;

  let left = 0;
  let right = 0;

  while (right < nums.length || left !== right) {
    if (nums[right]) {
      right++;
      continue;
    }

    maxOnesCount = Math.max(maxOnesCount, right - left);

    right++;
    left = right;
  }

  return maxOnesCount;
};
