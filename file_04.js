"use strict"
// ================================
// const Keyword in JavaScript
// ================================

// 'const' is used to declare variables whose value cannot be changed
// const stands for "constant"


// ==================================
// Declaring Variable with const
// ==================================

// const variable must be initialized at the time of declaration

const firstName = "Abhishek";
console.log(firstName);


// ❌ Invalid (const must have a value)
// const firstName;


// ==================================
// const Variable Cannot Be Reassigned
// ==================================

const lastName = "Singh";

// ❌ Error
// lastName = "Kumar";

console.log(lastName);


// ==================================
// Variable Names are Case Sensitive
// ==================================

const firstName1 = "Abhishek";
const FirstName1 = "Abhishek Singh";

console.log(firstName1);
console.log(FirstName1);


// ==================================
// Block Scope
// ==================================

// const is also Block Scoped (like let)

{
    const age = 22;
    console.log(age); // Accessible inside block
}

// console.log(age); ❌ Error


// ==================================
// Block Scope vs Function Scope
// ==================================

// var  → Function Scoped
// let  → Block Scoped
// const → Block Scoped