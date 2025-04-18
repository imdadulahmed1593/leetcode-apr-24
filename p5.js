
// 5. Longest Palindromic Substring

// Given a string s, return the longest palindromic substring in s.

 

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:
// 1 <= s.length <= 1000
// s consist of only digits and English letters.


var longestPalindrome = function (s) {
    if (s.length <= 1) return s;

    let dp = new Array(s.length).fill(false);
    let lps = '';

    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = s.length - 1; j >= i; j--) {
            if (s[i] === s[j] && (j - i < 2 || dp[j - 1])) {
                dp[j] = true;

                if (j - i + 1 > lps.length) {
                    lps = s.substring(i, j + 1);
                }
            } else {
                dp[j] = false;
            }
        }
    }
    return lps;
};

// python implementation
// class Solution:
   // def longestPalindrome(self, s: str) -> str:
      //  if len(s) <= 1:
         //   return s
        
        // Max_Len=1
        // Max_Str=s[0]
        // for i in range(len(s)-1):
            // for j in range(i+1,len(s)):
                // if j-i+1 > Max_Len and s[i:j+1] == s[i:j+1][::-1]:
                   //  Max_Len = j-i+1
                    // Max_Str = s[i:j+1]

        // return Max_Str
