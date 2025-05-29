// given a sorted array of integers 'nums', write a function 'Search' that returns the index of the number 'target' in the array. If the number is not in the array, return -1.
// binary Search - o(logn)

function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 4)); //3
console.log(binarySearch([1, 2, 3, 4, 5], 11)); // -1
console.log(binarySearch([1, 2, 3, 4, 5], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 23, 253, 56, 786], 6)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 23, 253, 56, 786], 23)); // 8
