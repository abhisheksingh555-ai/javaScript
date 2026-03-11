"use strict"
// ==================================
// Truthy and Falsy Values in JavaScript
// ==================================

// In JavaScript, every value has an inherent Boolean value
// when evaluated in a Boolean context (like if conditions)


// ==================================
// Falsy Values
// ==================================

// These values are treated as false in Boolean context

false
0
""
null
undefined
NaN


// Example

let value = "";

if(value){
    console.log("Truthy Value");
}else{
    console.log("Falsy Value");
}
// Output: Falsy Value


// ==================================
// Truthy Values
// ==================================

// All values except falsy values are considered truthy

// Examples

"hello"
1
-5
[]
{}
true


// Example

let name = "Abhi";

if(name){
    console.log("Truthy Value");
}else{
    console.log("Falsy Value");
}
// Output: Truthy Value