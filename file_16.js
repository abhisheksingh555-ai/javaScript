"use strict"
// ==================================
// Switch Statement in JavaScript
// ==================================

// Switch statement is used when we need to check
// multiple values of a single variable


// Syntax

// switch(expression){
//     case value1:
//         code
//         break;
//     case value2:
//         code
//         break;
//     default:
//         code
// }


// ==================================
// Example
// ==================================

let day = 3;

switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
}


// ==================================
// Important: break Keyword
// ==================================

// break stops the execution of the switch block
// If break is not used, it will execute all cases after the match