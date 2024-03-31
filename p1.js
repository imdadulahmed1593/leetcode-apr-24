// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// the intuition
// 1. for an entry, I just have to check if target - entry exists in the array

// algorithm
// 1. create a hashmap
// 2. loop through the nums array
// 3. check if target - entry exists in the hashmap
// 4. if yes, return the indices
// 5. else, put entry in hashmap

const twoSum = function (nums, target) {
  let fc = {};

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in fc) {
      return [fc[target - nums[i]], i];
    }
    fc[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
