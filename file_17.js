"use strict"
// ==================================
// While Loop in JavaScript
// ==================================

// A while loop is used to repeat a block of code
// as long as a condition is true.

// Why do we use loops?
// Instead of writing the same code many times,
// loops allow us to run it repeatedly.


// ==================================
// Syntax
// ==================================

/*
while(condition){
    // code to execute
}
*/


// ==================================
// Example
// ==================================

let i = 1;

while(i <= 5){
    console.log(i);
    i++;
}

// Output
// 1
// 2
// 3
// 4
// 5



// ==================================
// Dry Run (Step by Step)
// ==================================

// Initial value
// i = 1

// Step 1
// 1 <= 5 → true → print 1
// i becomes 2

// Step 2
// 2 <= 5 → true → print 2
// i becomes 3

// Step 3
// 3 <= 5 → true → print 3
// i becomes 4

// Step 4
// 4 <= 5 → true → print 4
// i becomes 5

// Step 5
// 5 <= 5 → true → print 5
// i becomes 6

// Step 6
// 6 <= 5 → false → loop stops



// ==================================
// Another Example
// ==================================

let num = 1;

while(num <= 3){
    console.log("Hello");
    num++;
}