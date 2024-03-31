// valid anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// the intuition
// 1. to be anagram, the two strings must have the same length
// 2. to be anagram, the two strings must have the same character frequency

// algorithm
// 1. check if the two strings have the same length
// 2. if yes, then check if the two strings have the same character frequency
// 3. if yes, then the two strings are anagrams

const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let fc1 = {};
  let fc2 = {};

  for (const char of s) {
    fc1[char] = (fc1[char] || 0) + 1;
  }

  for (const char of t) {
    fc2[char] = (fc2[char] || 0) + 1;
  }

  for (const key in fc1) {
    if (fc1[key] !== fc2[key]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("cat", "car")); // false
console.log(isAnagram("a", "ab")); // false
