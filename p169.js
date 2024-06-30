// Majority Element

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const majorityElement = function (nums) {
  let majNum = Math.floor(nums.length / 2);
  let freqCounter = {};
  for (let num of nums) {
    freqCounter[num] = freqCounter[num] ? freqCounter[num] + 1 : 1;
  }

  for (let elem in freqCounter) {
    if (freqCounter[elem] > majNum) return elem;
  }
};
