// ==================================
// Array Methods in JavaScript
// push, pop, shift, unshift
// ==================================

// These methods are used to **add or remove elements**
// from an array.

// Important:
// All these methods **modify the original array**.


// ==================================
// push() Method
// ==================================

// push() adds one or more elements at the **end of the array**
// and returns the **new length of the array**

let fruits = ["Apple", "Mango"];

console.log(fruits); 
// ["Apple", "Mango"]

fruits.push("Banana");   // add element at the end

console.log(fruits);
// ["Apple", "Mango", "Banana"]


// ==================================
// pop() Method
// ==================================

// pop() removes the **last element** from the array
// and **returns the removed element**

let fruits2 = ["Apple", "Mango", "Banana"];

console.log(fruits2);
// ["Apple", "Mango", "Banana"]

let removedFruit = fruits2.pop();  // removes "Banana"

console.log(fruits2);
// ["Apple", "Mango"]

console.log(removedFruit);
// "Banana"


// ==================================
// unshift() Method
// ==================================

// unshift() adds one or more elements at the **beginning of the array**
// and returns the **new length of the array**

let fruits3 = ["Apple", "Mango"];

console.log(fruits3);
// ["Apple", "Mango"]

fruits3.unshift("Banana");  // add element at start

console.log(fruits3);
// ["Banana", "Apple", "Mango"]


// ==================================
// shift() Method
// ==================================

// shift() removes the **first element** from the array
// and **returns the removed element**

let fruits4 = ["Banana", "Apple", "Mango"];

console.log(fruits4);
// ["Banana", "Apple", "Mango"]

let removedFirst = fruits4.shift();  // removes "Banana"

console.log(fruits4);
// ["Apple", "Mango"]

console.log(removedFirst);
// "Banana"


// ==================================
// Quick Summary
// ==================================

// push()    → add element at end
// pop()     → remove element from end
// unshift() → add element at beginning
// shift()   → remove element from beginning


// ==================================
// Memory Trick
// ==================================

// push / pop    → work at the **end of the array**
// shift / unshift → work at the **start of the array**