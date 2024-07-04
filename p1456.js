// 1456. Maximum Number of Vowels in a Substring of Given Length

// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:
// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

// Example 2:
// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.

// Example 3:
// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

const maxVowels = function (s, k) {
  let ans = 0;
  let count = 0;

  // Count vowels in the first window
  for (let i = 0; i < k; i++) {
    if (isVowel(s[i])) {
      count++;
    }
  }
  ans = Math.max(ans, count);

  // Slide the window and update the count
  for (let i = k; i < s.length; i++) {
    if (isVowel(s[i])) {
      count++;
    }
    if (isVowel(s[i - k])) {
      count--;
    }
    ans = Math.max(ans, count);
  }

  return ans;
};

function isVowel(c) {
  return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u';
}
