// 3174. Clear Digits
// You are given a string s.

// Your task is to remove all digits by doing this operation repeatedly:

// Delete the first digit and the closest non-digit character to its left.
// Return the resulting string after removing all digits.

// Example 1:

// Input: s = "abc"

// Output: "abc"

// Explanation:

// There is no digit in the string.

// Example 2:

// Input: s = "cb34"

// Output: ""

// Explanation:

// First, we apply the operation on s[2], and s becomes "c4".

// Then we apply the operation on s[1], and s becomes "".

var clearDigits = function (s) {
  let stack = [];
  for (let c of s) {
    if (!isNaN(c)) {
      if (stack.length) stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.join("");
};
