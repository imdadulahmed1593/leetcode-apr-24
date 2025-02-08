// valid anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// the intuition
// 1. to be anagram, the two strings must have the same length
// 2. to be anagram, the two strings must have the same character frequency

// algorithm
// 1. check if the two strings have the same length
// 2. if yes, then check if the two strings have the same character frequency
// 3. if yes, then the two strings are anagrams

// const isAnagram = function (s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   let fc1 = {};
//   let fc2 = {};

//   for (const char of s) {
//     fc1[char] = (fc1[char] || 0) + 1;
//   }

//   for (const char of t) {
//     fc2[char] = (fc2[char] || 0) + 1;
//   }

//   for (const key in fc1) {
//     if (fc1[key] !== fc2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;

//   let freCounter1 = {};
//   let freCounter2 = {};

//   for (let char of s) {
//     freCounter1[char] = (freCounter1[char] || 0) + 1;
//   }
//   for (let char of t) {
//     freCounter2[char] = (freCounter2[char] || 0) + 1;
//   }

//   for (let char in freCounter1) {
//     if (!(char in freCounter2)) return false; //eta na dileo hoy asole
//     if (freCounter1[char] !== freCounter2[char]) return false;
//   }

//   return true;
// };

// "colt steels method"
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const lookup = {};
  for (let char of s) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    let letter = t[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

// console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("catt", "cata")); // false
console.log(isAnagram("a", "ab")); // false
