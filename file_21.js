// ==================================
// Introduction to Arrays in JavaScript
// ==================================

// Arrays are a type of **reference data type**.
// They store an **ordered collection of items**.


// ==================================
// How to Create an Array
// ==================================

// Using array literal
let arr = [1, 2, 3, 4];

// Using Array constructor
let arr2 = new Array(5, 6, 7);


// ==================================
// Accessing & Updating Array Elements
// ==================================

console.log(arr[0]);  // 1 → first element
arr[1] = 20;           // updating second element
console.log(arr[1]);   // 20


// ==================================
// Difference Between Array & Object
// ==================================

let obj = {};  // object literal

console.log(arr);              // [1, 20, 3, 4]
console.log(typeof arr);       // object
console.log(Array.isArray(arr)); // true
console.log(Array.isArray(obj)); // false


// ==================================
// Array Indexing
// ==================================

// Array elements are indexed starting from 0

// Example
// arr = [1, 20, 3, 4]
// Index:  0   1   2  3

console.log(arr[2]); // 3 → third element