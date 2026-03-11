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