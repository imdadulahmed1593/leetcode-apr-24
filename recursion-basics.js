// 1. Power
// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

// function power(base, exponent) {
//   if (exponent === 0) return 1;
//   exponent--;
//   return base * power(base, exponent);
// }

// another amazing solution (beats 100%)
// var myPow = function (x, n) {
//     // Base case: x^0 = 1
//     if (n === 0) return 1;

//     // Handling negative powers
//     if (n < 0) {
//       return 1 / myPow(x, -n);
//     }

//     let half = myPow(x, Math.floor(n / 2));

//     if (n % 2 === 0) {
//       return half * half;
//     } else {
//       return x * half * half;
//     }
//   };

// console.log(power(2, 0)); // 1
// console.log(power(2, 2)); // 4
// console.log(power(2, 4)); // 16

// 2. Factorial
//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

// function factorial(n) {
//   if (n === 1 || n === 0) return 1;
//   return n * factorial(n - 1);
// }

// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(4)); // 24
// console.log(factorial(7)); // 5040

// 3. productOfArray
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// function productOfArray(arr) {
//   if (arr.length === 0) return 1;
//   return arr[0] * productOfArray(arr.slice(1));
// }

// console.log(productOfArray([1, 2, 3])); // 6
// console.log(productOfArray([1, 2, 3, 10])); // 60

// 4. recursiveRange
// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

// function recursiveRange(num) {
//   if (num === 1) return 1;
//   return num + recursiveRange(num - 1);
// }

// console.log(recursiveRange(6)); // 21
// console.log(recursiveRange(10)); // 55

// 5. fib
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// function fib(n) {
//   if (n === 1 || n === 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(4)); // 3
// console.log(fib(10)); // 55
// console.log(fib(28)); // 317811
// console.log(fib(35)); // 9227465
