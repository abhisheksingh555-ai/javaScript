"use strict"
// ==================================
// Some Important String Methods
// ==================================

// 1. trim()
// 2. toUpperCase()
// 3. toLowerCase()
// 4. slice()


// ==================================
// trim() Method
// ==================================

// trim() removes extra spaces from the start and end of a string

let firstName = "   Abhishek   ";

console.log(firstName.length);

let newString = firstName.trim();

console.log(firstName);

console.log(newString);
console.log(newString.length);


// ==================================
// toUpperCase() Method
// ==================================

// Converts all characters to uppercase

let name = "abhishek";

let upperName = name.toUpperCase();

console.log(upperName); // ABHISHEK


// ==================================
// toLowerCase() Method
// ==================================

// Converts all characters to lowercase

let userName = "ABHISHEK";

let lowerName = userName.toLowerCase();

console.log(lowerName); // abhishek


// ==================================
// slice() Method
// ==================================

// slice(startIndex, endIndex)

let str = "Abhishek";

let newStr = str.slice(0,4);

console.log(newStr); // Abhi