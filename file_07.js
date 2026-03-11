"use strict"
// ==================================
// typeof Operator in JavaScript
// ==================================

// typeof is used to check the data type of a value


// ==================================
// Primitive Data Types
// ==================================

// String  → "abhishek"
// Number  → 1, 2, 3.23
// Boolean → true / false
// null
// undefined
// Symbol
// BigInt


// Example

let age = 20;
let name = "Abhi";

console.log(typeof age);   // number
console.log(typeof name);  // string


// ==================================
// Convert Number to String
// ==================================

let num = 22;

// Method 1 (Easy trick)
console.log(typeof (num + "")); // "22" → string


// Method 2
console.log(typeof String(num)); // string


// ==================================
// Convert String to Number
// ==================================

let str = "33";

// Method 1 (Unary + operator)
console.log(typeof (+str)); // number


// Method 2
console.log(typeof Number(str)); // number