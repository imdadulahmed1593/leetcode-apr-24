// write a function 'MaxSubArraySum' which accepts an array of integers and a number called n.
// the function should calculate the maximum sum of n consecutive elements in the array.
// example:
// maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3) => 19
// maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 4) => 22

function maxSubArraySum(arr, n) {
  // create a window that'll calculate the sum
  if (arr.length < n) return null;
  let maxSum = 0;
  let tempSum;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  // now slide the window and calculate sum for each window
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); //19
console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 4)); //22
