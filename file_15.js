"use strict"
// ==================================
// Logical Operators (AND / OR)
// ==================================

// Logical operators are used to combine multiple conditions

// &&  → AND operator
// ||  → OR operator


// ==================================
// Example without Logical Operator
// ==================================

let name = "Abhii";
let age = 20;

if(name[0] === "A"){
    console.log("Name starts with A");
}else{
    console.log("Name does not start with A");
}

if(age > 20){
    console.log("You can do it");
}


// ==================================
// AND (&&) Operator
// ==================================

// Both conditions must be true

if(name[0] === "A" && age > 20){
    console.log("Name starts with A and age is greater than 20");
}else{
    console.log("Condition is false");
}


// ==================================
// OR (||) Operator
// ==================================

// At least one condition must be true

if(name[0] === "A" || age > 20){
    console.log("One condition is true");
}else{
    console.log("Both conditions are false");
}