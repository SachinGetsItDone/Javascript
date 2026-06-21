
for (let i = 0; i <= 5; i++) {
    const element = i;
    if (element === 3) {
        // console.log("3 is the best number");
    }
    // console.log(element);
}


for (let i = 1; i <= 3; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 3; j++) {
        // console.log(`Inner loop value: ${j} and outer loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j );
    }
}


const myHeroArray = ["Ironman", "Batman", "Spiderman", "Thor"];

for (let index = 0; index < myHeroArray.length; index++) {
    const hero = myHeroArray[index];
    // console.log(hero);
}



for (let index = 1; index <= 10; index++) {
    if (index === 5) {
        // console.log(`Detected 5. Exiting loop entirely...`);
        break; // Loop stops executing here and exits
    }
    // console.log(`Value of i is ${index}`);
}


for (let index = 1; index <= 10; index++) {
    if (index === 5) {
        // console.log(`Detected 5. Skipping this iteration...`);
        continue; // Skips the code below, increments index, and moves to next loop run
    }
    // console.log(`Value of i is ${index}`);
}
