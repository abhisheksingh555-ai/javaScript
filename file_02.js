"use strict"
// ================================
// Rules for Naming Variables
// ================================

// 1. Variable names cannot start with a number
// ❌ Invalid
// var 1name = "Abhishek"

// ✔ Valid
var name1 = "Abhishek";


// 2. You can use only underscore (_) or dollar ($) symbol
// ✔ Valid
var first_name = "Abhishek";
var $age = 22;


// 3. Spaces are not allowed in variable names
// ❌ Invalid
// var first name = "Abhishek"

// ✔ Valid
var firstName = "Abhishek";


// 4. Convention (Recommended way)

// Use camelCase naming convention in JavaScript
// Example:
var firstName = "Abhishek";
var userAge = 22;
var totalAmount = 500;