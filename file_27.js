// ==================================
// Array Destructuring in JavaScript
// ==================================

// Array destructuring allows us to extract
// values from an array and assign them to variables
// in a shorter and cleaner way.


// ==================================
// Traditional Way (Without Destructuring)
// ==================================

let arr = ["item1", "item2"];

let var1 = arr[0];
let var2 = arr[1];

console.log("var1 is", var1);
console.log("var2 is", var2);


// ==================================
// Using Array Destructuring
// ==================================

// Instead of accessing elements by index,
// we can directly extract values.

let [value1, value2] = arr;

console.log("value1 is", value1);
console.log("value2 is", value2);


// ==================================
// Skipping Values in Destructuring
// ==================================

let arr2 = ["item1", "item2", "item3"];

let [first, , third] = arr2;

console.log(first);  // item1
console.log(third);  // item3


// ==================================
// Using Rest Operator with Destructuring
// ==================================

let arr3 = ["item1", "item2", "item3", "item4"];

let [a, b, ...restItems] = arr3;

console.log(a);         // item1
console.log(b);         // item2
console.log(restItems); // ["item3", "item4"]


// ==================================
// Quick Summary
// ==================================

// Array destructuring → extract values from array easily

// Example:
// let [a, b] = arr;

// Benefits:
// ✔ Cleaner code
// ✔ Less typing
// ✔ Easier variable assignment