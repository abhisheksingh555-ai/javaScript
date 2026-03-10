"use strict"
// ================================
// let Keyword in JavaScript
// ================================

// 'let' is used to declare variables (modern way in JavaScript)


// ==================================
// Declaring Variable with let
// ==================================

let firstName = "Abhishek";
console.log(firstName);


// ==================================
// Variable Names are Case Sensitive
// ==================================

let firstName = "Abhishek";
let FirstName = "Abhishek Singh";

console.log(firstName);   // Abhishek
console.log(FirstName);   // Abhishek Singh


// ==================================
// Important Rule
// ==================================

// We cannot declare the same variable again using 'let'

// ❌ Invalid
// let firstName = "Abhishek";
// let firstName = "Rahul";


// ✔ Correct Way
let firstName = "Abhishek";
firstName = "Abhishek Singh";

console.log(firstName);


// ==================================
// Block Scope vs Function Scope
// ==================================

// 'let' is Block Scoped
// 'var' is Function Scoped

// Block Scope Example
{
    let age = 22;
    console.log(age); // Accessible inside block
}

// console.log(age); ❌ Error (not accessible outside block)


// Function Scope Example (var)

function example(){
    var num = 10;
    console.log(num);
}

example();

// console.log(num); ❌ Error