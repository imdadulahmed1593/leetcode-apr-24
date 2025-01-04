// p168 - Excel Sheet Column Title 
// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...
 

// Example 1:
// Input: columnNumber = 1
// Output: "A"

// Example 2:
// Input: columnNumber = 28
// Output: "AB"

// Example 3:
// Input: columnNumber = 701
// Output: "ZY"


var convertToTitle = function (columnNumber) {

    const Letter = "ZABCDEFGHIJKLMNOPQRSTUVWXY"
    let str = ""
    while (columnNumber > 0) {
        str = Letter.charAt(columnNumber % 26) + str
        columnNumber -= columnNumber % 26 == 0 ? 26 : columnNumber % 26
        columnNumber /= 26
    }
    return str
};