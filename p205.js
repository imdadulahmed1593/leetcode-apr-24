// P205 - Isomorphic Strings

// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:
// Input: s = "egg", t = "add"
// Output: true

// Example 2:
// Input: s = "foo", t = "bar"
// Output: false

// Example 3:
// Input: s = "paper", t = "title"
// Output: true

var isIsomorphic = function (s, t) {
  const dict = new Map();
  const hSet = new Set();

  for (let i = 0; i < s.length; i++) {
    const sChar = s.charAt(i);
    const tChar = t.charAt(i);
    if (!dict.has(sChar)) {
      if (hSet.has(tChar)) {
        return false;
      }
      dict.set(sChar, tChar);
      hSet.add(tChar);
    } //check if exists
    else {
      if (tChar !== dict.get(sChar)) {
        return false;
      }
    }
  }

  return true;
};
