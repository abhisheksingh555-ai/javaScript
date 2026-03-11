"use strict"
// ==================================
// Template Strings in JavaScript
// ==================================

// Template strings are used to insert variables inside a string easily
// We use backticks (` `) instead of quotes


// Example

let age = 20;
let name = "Abhi";

console.log(`${name} age is ${age}`);

// Output
// Abhi age is 20


// ==================================
// Why Template Strings?
// ==================================

// It makes string concatenation easier and more readable


// Old Way (String Concatenation)

let message = name + " age is " + age;
console.log(message);


// Modern Way (Template String)

let message2 = `${name} age is ${age}`;
console.log(message2);