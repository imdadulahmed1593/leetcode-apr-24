// p383 - Ransom Note
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

var canConstruct = function (ransomNote, magazine) {
  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let char of ransomNote) {
    freqCounter1[char] = freqCounter1[char] ? freqCounter1[char] + 1 : 1;
  }

  for (let char of magazine) {
    freqCounter2[char] = freqCounter2[char] ? freqCounter2[char] + 1 : 1;
  }

  console.log(freqCounter1, freqCounter2);

  for (let elem in freqCounter1) {
    if (!freqCounter2[elem] || freqCounter1[elem] > freqCounter2[elem])
      return false;
  }

  return true;
};

// console.log(canConstruct("a", "b"));
// console.log(canConstruct("aa", "ab")); // false
// console.log(canConstruct("aa", "aab")); // true
