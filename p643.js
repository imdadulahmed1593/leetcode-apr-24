// 643. Maximum Average Subarray I
// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:
// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// Example 2:
// Input: nums = [5], k = 1
// Output: 5.00000

var findMaxAverage = function (nums, k) {
  let maxSum = 0;
  let maxAvg = 0;
  for (let l = 0; l < k; l++) {
    maxSum += nums[l];
  }
  maxAvg = maxSum / k;

  for (let l = k; l < nums.length; l++) {
    maxSum = maxSum - nums[l - k] + nums[l];
    maxAvg = Math.max(maxAvg, maxSum / k);
  }

  return maxAvg;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); //12.75
console.log(findMaxAverage([5], 1)); //5
console.log(findMaxAverage([0, 4, 0, 3, 2], 1)); //5
