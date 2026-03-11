"use strict"
// ================================
// String Indexing in JavaScript
// ================================

let firstName = "Abhishek";

//  A   b   h   i   s   h   e   k
//  0   1   2   3   4   5   6   7

// Accessing characters using index

console.log(firstName[0]); // A
console.log(firstName[1]); // b
console.log(firstName[2]); // h


// ================================
// Length of String
// ================================

// .length property returns total number of characters

console.log(firstName.length); // 8


// ================================
// Last Index of String
// ================================

// Formula to get last character

console.log(firstName[firstName.length - 1]); // k