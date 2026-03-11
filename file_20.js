"use strict"
// ==================================
// Do While Loop in JavaScript
// ==================================

// A do-while loop is similar to a while loop
// but it **executes the code block at least once**
// before checking the condition.


// Syntax

// do {
//     // code to execute
// } while(condition);


// ==================================
// Example
// ==================================

let i = 1;

do {
    console.log(i);
    i++;
} while(i <= 5);

// Output
// 1
// 2
// 3
// 4
// 5


// ==================================
// Difference Between While and Do-While
// ==================================

// While Loop → condition is checked **before** executing the code
// Do-While Loop → code runs **once before** checking condition


// ==================================
// Another Example
// ==================================

let num = 10;

do {
    console.log("Hello");
    num++;
} while(num < 10);

// Output → "Hello"
// Even though num < 10 is false initially, code runs once