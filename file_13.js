"use strict"
// ==================================
// if else Condition in JavaScript
// ==================================

// if-else is used to run code based on a condition

// Syntax

// if(condition){
//     code runs if condition is true
// }else{
//     code runs if condition is false
// }


// ==================================
// Example
// ==================================

let age = 18;

if(age > 20){
    console.log("You can do it");
}else{
    console.log("You cannot do it");
}

// Output → You cannot do it
// because 18 > 20 is false



// ==================================
// Truthy and Falsy Values
// ==================================

// In JavaScript, values inside conditions are automatically
// converted into true or false


// Falsy Values

// undefined
// ""
// null
// false
// 0
// NaN


// Example with falsy value

let name = "";

if(name){
    console.log("Name is present");
}else{
    console.log("Name is empty");
}

// Output → Name is empty


// ==================================
// Truthy Values
// ==================================

// All values except falsy values are truthy

// Examples

// "hello"
// 1
// -5
// []
// {}
// true


let userName = "Abhi";

if(userName){
    console.log("Name is present");
}else{
    console.log("Name is empty");
}

// Output → Name is present