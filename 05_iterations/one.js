// --- Video 27: For Loop with Break and Continue ---

// 1. Basic For Loop
// Syntax is identical to C++: for (initialization; condition; increment)
for (let i = 0; i <= 5; i++) {
    const element = i;
    if (element === 3) {
        // console.log("3 is the best number");
    }
    // console.log(element);
}


// 2. Nested For Loop (e.g., printing tables)
for (let i = 1; i <= 3; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 3; j++) {
        // console.log(`Inner loop value: ${j} and outer loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j );
    }
}


// 3. Iterating Over Arrays with For Loop
const myHeroArray = ["Ironman", "Batman", "Spiderman", "Thor"];
// console.log("Array length is:", myHeroArray.length);

for (let index = 0; index < myHeroArray.length; index++) {
    const hero = myHeroArray[index];
    // console.log(hero);
}


// 4. Loop Control Keywords: break and continue

// --- break: Completely exits the loop immediately ---
// console.log("--- Test break ---");
for (let index = 1; index <= 10; index++) {
    if (index === 5) {
        // console.log(`Detected 5. Exiting loop entirely...`);
        break; // Loop stops executing here and exits
    }
    // console.log(`Value of i is ${index}`);
}

// --- continue: Skips the current iteration and jumps to the next one ---
// console.log("--- Test continue ---");
for (let index = 1; index <= 10; index++) {
    if (index === 5) {
        // console.log(`Detected 5. Skipping this iteration...`);
        continue; // Skips the code below, increments index, and moves to next loop run
    }
    // console.log(`Value of i is ${index}`);
}
