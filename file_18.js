"use strict"
// ==================================
// For Loop in JavaScript
// ==================================

// A for loop is used when we know how many times
// we want to run a block of code.


// Syntax

// for(initialization; condition; update){
//     code to execute
// }


// ==================================
// Example
// ==================================

for(let i = 1; i <= 5; i++){
    console.log(i);
}

// Output
// 1
// 2
// 3
// 4
// 5



// ==================================
// break Keyword
// ==================================

// break is used to stop the loop immediately

for(let i = 1; i <= 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}

// Output
// 1
// 2
// 3
// 4


// ==================================
// continue Keyword
// ==================================

// continue skips the current iteration
// and moves to the next iteration

for(let i = 1; i <= 5; i++){
    if(i === 3){
        continue;
    }
    console.log(i);
}

// Output
// 1
// 2
// 4
// 5