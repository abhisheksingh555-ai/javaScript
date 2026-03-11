"use strict"
// ==================================
// String Concatenation in JavaScript
// ==================================

// String concatenation means joining two or more strings together


// Example 1

let firstName = "Abhishek";
let lastName = "Singh";

let fullName = firstName + " " + lastName;

console.log(fullName); // Abhishek Singh


// ==================================
// Concatenation with Numbers in String
// ==================================

let str1 = "12";
let str2 = "18";

let newStr = str1 + str2;

console.log(newStr); // "1218"


// ==================================
// Convert String to Number before Adding
// ==================================

// Using unary + operator

newStr = +str1 + +str2;

console.log(newStr); // 30