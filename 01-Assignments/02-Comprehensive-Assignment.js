// =========================================================================
//   JAVASCRIPT COMPREHENSIVE ASSIGNMENT (BASICS TO CONTROL FLOW)
// =========================================================================
// Write your code/solutions below each question prompt.
// Run your file with: node Javascript/01-Assignments/02-Comprehensive-Assignment.js
// As you complete each question, uncomment the corresponding test cases at the bottom to verify.

console.log("--- Running Comprehensive Assignment ---");

/* 
  QUESTION 1: The Strict Type Checker (Datatypes & Coercion)
  - Create a function named `checkTypeDetails` that takes one argument `val`.
  - It should return:
    - `"nullish"` if the value is null or undefined.
    - `"number: NaN"` if the value is NaN.
    - `"array"` if the value is an Array (Hint: Use Array.isArray()).
    - The string format `"<type>: <value>"` for all other primitives (e.g. "number: 42", "boolean: true", "string: hello").
  
  Test cases to uncomment:
  // console.log(checkTypeDetails(null));        // Expected: "nullish"
  // console.log(checkTypeDetails(undefined));   // Expected: "nullish"
  // console.log(checkTypeDetails(NaN));         // Expected: "number: NaN"
  // console.log(checkTypeDetails([1, 2, 3]));   // Expected: "array"
  // console.log(checkTypeDetails(42));          // Expected: "number: 42"
  // console.log(checkTypeDetails("chai"));      // Expected: "string: chai"
*/

// Write your Q1 solution here:

function checkTypeDetails(val) {
  if (val === null || val === undefined) {
    return "nullish"
  }
  else if (Number.isNaN(val)) {
    return `${typeof val}: NaN`
  }
  else if (Array.isArray(val)) {
    return `array`
  }
  else {
    return `${typeof val}: ${val}`
  }
}
// console.log(checkTypeDetails(null));        // Expected: "nullish"
// console.log(checkTypeDetails(undefined));   // Expected: "nullish"
// console.log(checkTypeDetails(NaN));         // Expected: "number: NaN"
// console.log(checkTypeDetails([1, 2, 3]));   // Expected: "array"
// console.log(checkTypeDetails(42));          // Expected: "number: 42"
// console.log(checkTypeDetails("chai"));


/* 
  QUESTION 2: Copy Cat (Shallow vs Deep Copy)
  - Create a function named `cloneProfile` that takes two parameters: `profile` (an object) and `deep` (a boolean).
  - If `deep` is false, return a shallow copy of the `profile` using the spread operator.
  - If `deep` is true, return a deep copy of the `profile` using `structuredClone`.
  - The function should not modify the original object.
  
  Test cases to uncomment:
  // const user = { name: "Sachin", details: { city: "Delhi", active: true } };
  // const shallow = cloneProfile(user, false);
  // const deep = cloneProfile(user, true);
  // shallow.details.city = "Mumbai"; 
  // console.log(user.details.city); // Expected: "Mumbai" (Shallow copy shares nested object references)
  // deep.details.city = "Chennai"; 
  // console.log(user.details.city); // Expected: "Mumbai" (Deep copy has completely independent references)
*/

// Write your Q2 solution here:

function cloneProfile(profile, deep) {
  if (deep) {
    return structuredClone(profile);
  } else {
    return { ...profile }
  }

}

const user = {
  name: "Sachin",
  details: {
    city: "Delhi",
    active: true
  }
};
const shallow = cloneProfile(user, false);
const deep = cloneProfile(user, true);
shallow.details.city = "Mumbai";
console.log(user.details.city); // Expected: "Mumbai" (Shallow copy shares nested object references)
deep.details.city = "Chennai";
console.log(user.details.city); // 


/* 
  QUESTION 3: Nested Destructuring with Defaults (Objects)
  - Create a function named `getDatabaseConfig` that accepts a nested configuration object `configObj`.
  - Use object destructuring to extract:
    - `host`
    - `port` (if missing/undefined, default it to `3306`)
    - `username` from the nested `credentials` object (if `username` or the `credentials` object itself is missing/undefined, default it to `"guest"`)
  - The function should return a flat object containing: `{ host, port, username }`.
  
  Test cases to uncomment:
  // const myConfig = { host: "localhost", credentials: { username: "admin", password: "123" } };
  // const fallbackConfig = { host: "127.0.0.1" };
  // console.log(getDatabaseConfig(myConfig));       // Expected: { host: 'localhost', port: 3306, username: 'admin' }
  // console.log(getDatabaseConfig(fallbackConfig)); // Expected: { host: '127.0.0.1', port: 3306, username: 'guest' }
*/

// Write your Q3 solution here:

function getDatabaseConfig(configObj) {
  let { host, port = 3306, credentials: { username } = {} } = configObj;
  return { host, port, username }
}


/* 
  QUESTION 4: Deep Freeze (Objects)
  - As we know, `Object.freeze()` is shallow (it only freezes the top-level properties).
  - Create a function named `deepFreeze` that takes an object `obj` and recursively freezes it and all nested objects.
  - Hint: Check if a property is an object (and not null) before recursively calling `deepFreeze`.
  
  Test cases to uncomment:
  // const settings = { theme: "dark", api: { timeout: 5000, endpoints: { login: "/login" } } };
  // deepFreeze(settings);
  // settings.theme = "light";          // Should be ignored/silent fail
  // settings.api.timeout = 1000;       // Should be ignored/silent fail
  // settings.api.endpoints.login = "/"; // Should be ignored/silent fail
  // console.log(settings.theme);       // Expected: "dark"
  // console.log(settings.api.timeout); // Expected: 5000
  // console.log(settings.api.endpoints.login); // Expected: "/login"
*/

// Write your Q4 solution here:

function deepFreeze(obj) {
  Object.freeze(obj);
  Object.keys(obj).forEach((key) => {
    const prop = obj[key];

    if (typeof prop == "object" && prop !== null) {
      deepFreeze(prop)
    }
  });
  return obj;
}


/* 
  QUESTION 5: Dynamic Math Selector (Rest & Spread)
  - Create a function named `performOperation` that takes a string `operationName` as its first parameter, followed by a dynamic list of number arguments collected using the rest operator.
  - The parameter `operationName` can be: `"sum"`, `"multiply"`, or `"average"`.
  - If no numbers are passed, return `0`.
  - Otherwise:
    - `"sum"`: returns the sum of all numbers.
    - `"multiply"`: returns the product of all numbers.
    - `"average"`: returns the mathematical average of all numbers.
  
  Test cases to uncomment:
  // console.log(performOperation("sum", 1, 2, 3, 4));      // Expected: 10
  // console.log(performOperation("multiply", 2, 3, 4));    // Expected: 24
  // console.log(performOperation("average", 10, 20, 30));  // Expected: 20
  // console.log(performOperation("sum"));                  // Expected: 0
*/

// Write your Q5 solution here:

function performOperation(op, ...list) {
  if (list.length == 0) return 0;

  if (op == "sum") {
    return list.reduce((acc, curr) => acc + curr, 0)
  }
  if (op == "multiply") {
    return list.reduce((acc, curr) => acc * curr, 1)
  }
  if (op == "average") {
    return list.reduce((acc, curr) => acc + curr, 0) / list.length
  }
}

console.log(performOperation("sum", 1, 2, 3, 4));      // Expected: 10
console.log(performOperation("multiply", 2, 3, 4));    // Expected: 24
console.log(performOperation("average", 10, 20, 30));  // Expected: 20
console.log(performOperation("sum"));                  // Expected: 0


/* 
  QUESTION 6: Hoisting & Scoping Predictor (Conceptual)
  - Below is a block of JavaScript code. Read it and write your prediction of the output in a comment below it.
  - Explain WHY the code outputs what it does, referencing hoisting rules and block/lexical scopes.
*/

// Predict the output of this code snippet:
/*
  const x = 10;
  function outer() {
      console.log("1:", x); // What is printed? Why?
      // x is 10 because of global variable
      if (true) {
          var y = 20;
          let z = 30;
      }
      
      console.log("2:", y); // What is printed? Why?
      // undefined because local scope of if statement 
      // console.log("3:", z); // Will this line error? Why?
      // undefined because local scope of if statement 
  }
  outer();
*/

// Write your Q6 explanation / prediction here:
/*
  Prediction for "1:": 
  Prediction for "2:": 
  Explanation for "3:": 
  Explanation of Scope/Hoisting:
*/




/* 
  QUESTION 7: Fixing the 'this' Reference (Arrow vs Regular Functions)
  - The object below represents a simple user session but contains a bug.
  - The `greetUser` method (regular function) works fine, but the `greetUserArrow` method (arrow function) returns undefined.
  - In your solution, write:
    1. A comment explaining WHY the arrow function returns undefined.
    2. A modified object named `fixedSession` where both methods correctly print/return the username.
*/

const session = {
  username: "Sachin",
  greetUser: function () {
    return `Hello, ${this.username}!`;
  },
  greetUserArrow: () => {
    return `Hello, ${this}!`; // Buggy: returns "Hello, undefined!"
  }
};

// Write your Q7 explanation and the 'fixedSession' object here:

// this in greeuserarrow function is undefined because arrow functions do not have there own this, its referring to {} but i dont know why



/*
  QUESTION 8: IIFE Database Connector (IIFEs)
  - Write two consecutive IIFEs.
  - The first IIFE should print: `"Connecting to Database on Host: localhost"`
  - The second IIFE should print: `"Listening on Port: 8080"`
  - IMPORTANT: Make sure to format them so that JavaScript doesn't throw a TypeError when they run consecutively!
*/

// Write your Q8 solution here:




/*
  QUESTION 9: Configuration Initializer (Nullish Coalescing vs Logical OR)
  - Create a function named `initializeConfig` that accepts a `userConfig` object.
  - It should return a new object with default values:
    - `volume` (default: `50`)
    - `autoplay` (default: `true`)
    - `theme` (default: `"dark"`)
  - CRITICAL REQUIREMENT: If the user explicitly sets `volume` to `0`, `autoplay` to `false`, or `theme` to `""` (empty string), the function must preserve these choices. It should only fall back to defaults if the properties are `null` or `undefined`.

  Test cases to uncomment:
  // const customConfig = { volume: 0, autoplay: false, theme: "" };
  // const missingConfig = { theme: "light" };
  // console.log(initializeConfig(customConfig)); // Expected: { volume: 0, autoplay: false, theme: "" }
  // console.log(initializeConfig(missingConfig)); // Expected: { volume: 50, autoplay: true, theme: "light" }
*/

// Write your Q9 solution here:




/*
  QUESTION 10: Ternary Grade Categorizer (Nested Ternaries)
  - Create a function named `getMembershipTier` that takes two parameters: `points` (number) and `isActive` (boolean).
  - Use ONLY nested ternary operators (no `if`, `else`, or `switch` statements) to return the tier:
    - If `isActive` is false, return `"Inactive"`.
    - If `isActive` is true, evaluate `points`:
      - `points >= 1000`: return `"Platinum"`
      - `points >= 500`: return `"Gold"`
      - `points < 500`: return `"Silver"`

  Test cases to uncomment:
  // console.log(getMembershipTier(1200, true));   // Expected: "Platinum"
  // console.log(getMembershipTier(600, true));    // Expected: "Gold"
  // console.log(getMembershipTier(150, true));    // Expected: "Silver"
  // console.log(getMembershipTier(1200, false));  // Expected: "Inactive"
*/

// Write your Q10 solution here:




// ==========================================
//   TEST EXECUTION AREA (UNCOMMENT TO TEST)
// ==========================================
// Feel free to uncomment test cases here as you write your solutions.

// console.log("\n--- Q1 Tests ---");
// console.log(checkTypeDetails(null));        
// console.log(checkTypeDetails(undefined));   
// console.log(checkTypeDetails(NaN));         
// console.log(checkTypeDetails([1, 2, 3]));   
// console.log(checkTypeDetails(42));          
// console.log(checkTypeDetails("chai"));      

// console.log("\n--- Q2 Tests ---");
// const user = { name: "Sachin", details: { city: "Delhi", active: true } };
// const shallow = cloneProfile(user, false);
// const deep = cloneProfile(user, true);
// if (shallow && deep) {
//     shallow.details.city = "Mumbai"; 
//     console.log("Shallow check (original city):", user.details.city); // Should be Mumbai
//     deep.details.city = "Chennai"; 
//     console.log("Deep check (original city):", user.details.city); // Should remain Mumbai
// }

// console.log("\n--- Q3 Tests ---");
const myConfig = { host: "localhost", credentials: { username: "admin", password: "123" } };
const fallbackConfig = { host: "127.0.0.1" };
console.log(getDatabaseConfig(myConfig));
console.log(getDatabaseConfig(fallbackConfig));

// console.log("\n--- Q4 Tests ---");
const settings = { theme: "dark", api: { timeout: 5000, endpoints: { login: "/login" } } };
deepFreeze(settings);
settings.theme = "light";
settings.api.timeout = 1000;
settings.api.endpoints.login = "/";
console.log("Theme:", settings.theme);
console.log("Timeout:", settings.api.timeout);
console.log("Login endpoint:", settings.api.endpoints.login);

// console.log("\n--- Q5 Tests ---");
// console.log(performOperation("sum", 1, 2, 3, 4));      
// console.log(performOperation("multiply", 2, 3, 4));    
// console.log(performOperation("average", 10, 20, 30));  
// console.log(performOperation("sum"));                  

// console.log("\n--- Q7 Tests ---");
// console.log("Original greet:", session.greetUser());
// console.log("Original arrow greet:", session.greetUserArrow());
// if (typeof fixedSession !== 'undefined') {
//     console.log("Fixed greet:", fixedSession.greetUser());
//     console.log("Fixed arrow greet:", fixedSession.greetUserArrow());
// }

// console.log("\n--- Q9 Tests ---");
// const customConfig = { volume: 0, autoplay: false, theme: "" };
// const missingConfig = { theme: "light" };
// console.log(initializeConfig(customConfig)); 
// console.log(initializeConfig(missingConfig)); 

// console.log("\n--- Q10 Tests ---");
// console.log(getMembershipTier(1200, true));   
// console.log(getMembershipTier(600, true));    
// console.log(getMembershipTier(150, true));    
// console.log(getMembershipTier(1200, false));  
