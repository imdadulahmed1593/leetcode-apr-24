// 3105. Longest Strictly Increasing or Strictly Decreasing Subarray

// You are given an array of integers nums. Return the length of the longest
// subarray
//  of nums which is either
// strictly increasing
//  or
// strictly decreasing
// .

// Example 1:
// Input: nums = [1,4,3,3,2]
// Output: 2
// Explanation:
// The strictly increasing subarrays of nums are [1], [2], [3], [3], [4], and [1,4].
// The strictly decreasing subarrays of nums are [1], [2], [3], [3], [4], [3,2], and [4,3].
// Hence, we return 2.

// Example 2:
// Input: nums = [3,3,3,3]
// Output: 1
// Explanation:
// The strictly increasing subarrays of nums are [3], [3], [3], and [3].
// The strictly decreasing subarrays of nums are [3], [3], [3], and [3].
// Hence, we return 1.

// Example 3:
// Input: nums = [3,2,1]
// Output: 3
// Explanation:
// The strictly increasing subarrays of nums are [3], [2], and [1].
// The strictly decreasing subarrays of nums are [3], [2], [1], [3,2], [2,1], and [3,2,1].
// Hence, we return 3.
var longestMonotonicSubarray = function (nums) {
  let incLength = 1,
    decLength = 1,
    maxLength = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] > nums[i]) {
      incLength++;
      decLength = 1;
    } else if (nums[i + 1] < nums[i]) {
      decLength++;
      incLength = 1;
    } else {
      incLength = 1;
      decLength = 1;
    }
    maxLength = Math.max(maxLength, incLength, decLength);
  }

  return maxLength;
};
