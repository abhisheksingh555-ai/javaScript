// ==================================
// Primitive vs Reference Data Types
// ==================================

// JavaScript data types are mainly divided into two categories:

// 1. Primitive Data Types
// 2. Reference Data Types



// ==================================
// Primitive Data Types
// ==================================

// Primitive types store the **actual value directly in memory**.
// When we copy a primitive value, it creates a **separate copy**.

// Examples of primitive types:
// number, string, boolean, null, undefined, bigint, symbol

let num1 = 6;
let num2 = 1;

console.log("value of num1:", num1);
console.log("value of num2:", num2);

// Copying value
num2 = num1;

num1++;

console.log("After increment");

console.log("value of num1:", num1); // 7
console.log("value of num2:", num2); // 6

// Explanation:
// num2 received a **copy of num1's value**
// So when num1 changes, num2 remains the same



// ==================================
// Reference Data Types
// ==================================

// Reference types store the **memory address (reference)**
// instead of the actual value.

// Examples:
// Array, Object, Function

// Example using Array

let arr1 = ["item1", "item2"];
let arr2 = arr1;   // both variables point to the same array

console.log("arr1:", arr1);
console.log("arr2:", arr2);

arr1.push("item3");

console.log("After pushing new item");

console.log("arr1:", arr1);
console.log("arr2:", arr2);

// Explanation:
// arr1 and arr2 refer to the **same memory location**
// So any change in arr1 also affects arr2



// ==================================
// Quick Summary
// ==================================

// Primitive Data Types
// - Stored by value
// - Copy creates a new independent value
// - Example: number, string, boolean

// Reference Data Types
// - Stored by reference (memory address)
// - Copy points to the same object
// - Example: array, object, function 