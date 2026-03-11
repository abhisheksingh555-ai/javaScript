"use strict"
// ==================================
// undefined in JavaScript
// ==================================

// If a variable is declared but not assigned a value,
// its value is 'undefined'

let firstName;

console.log(typeof firstName); // undefined

firstName = "Abhi";

console.log(typeof firstName, firstName);
// string Abhi


// Example with var

var lastName;

console.log(lastName); // undefined


// ==================================
// const and undefined
// ==================================

// In the case of const, we must assign value during declaration

// ❌ Invalid
// const newStr;
// console.log(newStr);


// ==================================
// null in JavaScript
// ==================================

// null means "empty value" or "no value"

let myVariable = null;

console.log(myVariable); // null
console.log(typeof myVariable); // object (this is a known JavaScript bug)


// ==================================
// BigInt in JavaScript
// ==================================

// BigInt is used to store very large numbers

let bigNumber = BigInt(1234567890123456789012345);

console.log(bigNumber);

// Another way to create BigInt

let anotherBigInt = 1234567890123456789012345n;

console.log(anotherBigInt);