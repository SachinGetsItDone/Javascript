// --- Video 26: Control Flow in JavaScript ---

// 1. Basic If-Else and Strict Comparison
const score = 200
if (score === 200) {
    const power = "fly"
    // console.log(`User power: ${power}`);
}

// 2. Short-hand Notation (Implicit Scope - Discouraged but possible)
// if (true) console.log("test"), console.log("test2"); 


// 3. Switch Case
const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March"); // Will match here
        break; // Crucial! Without break, all cases after this will execute automatically
    default:
        console.log("Default case match");
        break;
}


// 4. Truthy & Falsy Values

// --- The 8 Falsy Values (Always evaluate to false) ---
// 1. false
// 2. 0
// 3. -0 (negative zero)
// 4. BigInt 0n
// 5. "" (empty string)
// 6. null
// 7. undefined
// 8. NaN

// --- Surprising Truthy Values (Evaluate to true) ---
// "0", "false", " ", [], {}, function(){}

const userEmail = []; // Empty array is TRUTHY!

if (userEmail) {
    console.log("Got user email (Evaluated as truthy because empty array exists in memory)");
} else {
    console.log("Don't have user email");
}

// WHY is an empty array/object truthy?
// In JS, arrays and objects are reference types (like pointers). 
// Since the pointer to the array/object in memory is valid (not null/undefined), it evaluates to true.
// To check if they are actually empty:
if (userEmail.length === 0) {
    console.log("Array is empty (checked length correctly)");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty (checked keys length correctly)");
}


// 5. Nullish Coalescing Operator (??) vs Logical OR (||)
// The ?? operator ONLY falls back for null or undefined.
// The || operator falls back for ANY falsy value (0, "", false, null, undefined, NaN).

let gameScore = 0; // A valid score of 0
let defaultScoreWithOr = gameScore || 10;   // 10 (Bug: 0 is falsy, so it fell back)
let defaultScoreWithNullish = gameScore ?? 10; // 0 (Correct: 0 is not null/undefined)

console.log("Logical OR fallback:", defaultScoreWithOr);       // 10
console.log("Nullish Coalescing fallback:", defaultScoreWithNullish); // 0

let val1;
val1 = 5 ?? 10;          // 5
val1 = null ?? 10;       // 10 (falls back because LHS is null)
val1 = undefined ?? 15;  // 15 (falls back because LHS is undefined)
val1 = null ?? undefined ?? 20; // 20 (skips null and undefined to find first defined value)

console.log("Nullish Coalescing Result:", val1);


// 6. Ternary Operator (Condition ? true : false)
// Short-hand for simple if-else statement.
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

