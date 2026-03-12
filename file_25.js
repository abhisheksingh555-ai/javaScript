// ==================================
// for Loop in Array
// ==================================

// We can use a for loop to iterate through
// all elements of an array.

let arr1 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

// Explanation:
// i = 0 → arr1[0] → 1
// i = 1 → arr1[1] → 2
// i = 2 → arr1[2] → 3
// i = 3 → arr1[3] → 4
// i = 4 → arr1[4] → 5


// ==================================
// Using const to Create Arrays
// ==================================

// Arrays are usually created using const
// because the reference does not change,
// but the contents of the array can still change.

const arr2 = [10, 20, 30];

arr2.push(40);   // modifying the array

console.log(arr2);
// [10, 20, 30, 40]


// ==================================
// Important Note
// ==================================

// const prevents reassignment of the variable
// but does NOT prevent modification of the array.

const numbers = [1, 2, 3];

numbers.push(4); // allowed

// numbers = [5,6,7]; ❌ Error (reassignment not allowed)


// ==================================
// Quick Summary
// ==================================

// for loop → used to iterate through array elements

// const array →
// ✔ elements can be modified
// ❌ variable cannot be reassigned