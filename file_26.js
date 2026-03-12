// ==================================
// Looping Through Arrays in JavaScript
// while loop, for...of, for...in
// ==================================


// ==================================
// while Loop in Array
// ==================================

// A while loop can be used to iterate through
// all elements of an array.

let arr1 = [10, 20, 30, 40];

let i = 0;

while (i < arr1.length) {
    console.log(arr1[i]);
    i++;
}

// Explanation:
// i = 0 → arr1[0] → 10
// i = 1 → arr1[1] → 20
// i = 2 → arr1[2] → 30
// i = 3 → arr1[3] → 40



// ==================================
// for...of Loop (For Values)
// ==================================

// for...of is used to iterate over the **values**
// of an array.

for (let num of arr1) {
    console.log(num);
}

// Output:
// 10
// 20
// 30
// 40



// ==================================
// for...in Loop (For Index)
// ==================================

// for...in is used to iterate over the **index**
// of the array.

for (let index in arr1) {
    console.log(`index ${index} = ${arr1[index]}`);
}

// Output:
// index 0 = 10
// index 1 = 20
// index 2 = 30
// index 3 = 40



// ==================================
// Quick Summary
// ==================================

// while loop → manual control with index
// for...of   → best for array values
// for...in   → gives array index (not commonly used for arrays)