"use strict"
// ==================================
// Boolean & Comparison Operators
// ==================================

// Boolean values have only two values
// true
// false


// ==================================
// Comparison Example
// ==================================

let num1 = 5;
let num2 = "5";

console.log(num1 > num2); 
// false (because 5 is not greater than 5)


// ==================================
// == vs ===
// ==================================

// ==  → checks value only (loose equality)
// === → checks value and data type (strict equality)

console.log(num1 == num2);  
// true (value is same, type is ignored)

console.log(num1 === num2); 
// false (number !== string)


// ==================================
// != vs !==
// ==================================

// !=  → checks value only
// !== → checks value and data type

console.log(num1 != num2);  
// false

console.log(num1 !== num2); 
// true