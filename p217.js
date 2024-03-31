// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// using javascript SET
let containsDuplicate = function (nums) {
  const set = new Set();
  for (const element of nums) {
    if (set.has(element)) {
      return true;
    } else {
      set.add(element);
    }
  }
  return false;
};

// Brute-force-approach
// function containsDuplicate(nums){
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             if(nums[i] === nums[j]){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// hashmap-approach
// function containsDuplicate(nums) {
//   const unique = {};
//   // for-of loop used for array & for-in loop used for objects
//   for (const element of nums) {
//     if (unique[element]) {
//       return true;
//     }
//     unique[element] = 1;
//   }
//   return false;
// }

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
