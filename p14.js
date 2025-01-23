// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
  let pref = strs[0];
  let prefLen = pref.length;

  for (let i = 1; i < strs.length; i++) {
    let s = strs[i];
    while (pref !== s.substring(0, prefLen)) {
      prefLen--;
      if (prefLen === 0) {
        return "";
      }
      pref = pref.substring(0, prefLen);
    }
  }

  return pref;
};
