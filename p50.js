// 50. Pow(x, n)

// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:
// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Example 2:
// Input: x = 2.10000, n = 3
// Output: 9.26100

// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

var myPow = function (x, n) {
  // Base case: x^0 = 1
  if (n === 0) return 1;

  // Handling negative powers
  if (n < 0) {
    return 1 / myPow(x, -n);
  }

  let half = myPow(x, Math.floor(n / 2));

  if (n % 2 === 0) {
    return half * half;
  } else {
    return x * half * half;
  }
};
