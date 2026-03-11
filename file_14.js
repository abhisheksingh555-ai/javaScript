"use strict"
// ==================================
// Ternary Operator in JavaScript
// ==================================

// The ternary operator is a shortcut for if-else conditions


// ==================================
// Example using if-else
// ==================================

let age = 15;

if(age >= 18){
    console.log("You can do it");
}else{
    console.log("You cannot do it");
}


// ==================================
// Ternary Operator (Conditional Operator)
// ==================================

// Syntax
// condition ? expression_if_true : expression_if_false

let ans = age >= 18 ? "You can do it" : "You cannot do it";

console.log(ans);


// ==================================
// Another Example
// ==================================

let num = 10;

let result = num % 2 === 0 ? "Even Number" : "Odd Number";

console.log(result);