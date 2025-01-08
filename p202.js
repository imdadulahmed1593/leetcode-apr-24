// // 202. Happy Number  

// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

 

// Example 1:
// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// Example 2:
// Input: n = 2
// Output: false
 

// Constraints:
// 1 <= n <= 231 - 1


var isHappy = function(n) {
    var visit = new Set();
    
    var getNextNumber = function(n) {
        var output = 0;
        
        while (n > 0) {
            var digit = n % 10;
            output += digit * digit;
            n = Math.floor(n / 10);
        }
        
        return output;
    };

    while (!visit.has(n)) {
        visit.add(n);
        n = getNextNumber(n);
        if (n === 1) {
            return true;
        }
    }

    return false;    
};


// python 3
// def jump(num: int) -> int:
//     """Helper function to compute the sum of squares of digits of a number."""
//     total = 0
//     while num > 0:
//         total += (num % 10) ** 2
//         num //= 10
//     return total

// class Solution:
//     def isHappy(self, n: int) -> bool:
//         """
//         Determines if a number is a happy number.
//         A number is happy if repeatedly replacing the number with the sum of the 
//         squares of its digits eventually leads to 1.
//         """
//         tortoise = jump(n)  # Moves one step
//         hare = jump(jump(n))  # Moves two steps
//         while tortoise != hare and hare != 1:
//             tortoise = jump(tortoise)
//             hare = jump(jump(hare))
//         return hare == 1