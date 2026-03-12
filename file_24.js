// ==================================
// How to Clone an Array in JavaScript
// ==================================

// When we assign one array to another variable,
// both variables point to the same memory location.

let arr1 = [1, 2, 3];
let arr2 = arr1;

// console.log(arr1 === arr2); // true → both refer to same array


// ==================================
// Problem with Direct Assignment
// ==================================

// If we change one array, the other also changes
// because both share the same reference.

arr2 = [1, 2, 34];

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 34]


// ==================================
// Method 1: Using slice()
// ==================================

// slice() creates a shallow copy of the array

let arr3 = arr1.slice(0);

console.log(arr3);
// [1, 2, 3]


// ==================================
// Method 2: Using concat()
// ==================================

// concat() can also be used to clone an array

let arr4 = [].concat(arr1);

console.log(arr4);
// [1, 2, 3]


// ==================================
// Method 3: Using Spread Operator
// ==================================

// Spread operator (...) is the most modern
// and commonly used way to clone arrays.

let arr5 = [...arr1];

console.log(arr5);
// [1, 2, 3]


// ==================================
// Adding Extra Elements While Cloning
// ==================================

// Using concat()

let arr6 = [].concat(arr1, [4, 5, 6]);

console.log(arr6);
// [1, 2, 3, 4, 5, 6]


// Using Spread Operator

let arr7 = [...arr1, 5, 6, 7];

console.log(arr7);
// [1, 2, 3, 5, 6, 7]


// ==================================
// How to Concatenate Arrays
// ==================================

// Combine multiple arrays together

let a = [1, 2];
let b = [3, 4];

let result = a.concat(b);

console.log(result);
// [1, 2, 3, 4]

// Using Spread Operator

let result2 = [...a, ...b];

console.log(result2);
// [1, 2, 3, 4]


// ==================================
// Quick Summary
// ==================================

// Clone Array Methods:
// 1. slice()
// 2. concat()
// 3. spread operator (...)


// Modern Recommendation:
// Use the **spread operator** for cloning arrays
// because it is cleaner and easier to read.