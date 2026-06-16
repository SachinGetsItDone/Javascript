// ==========================================
//   JAVASCRIPT FUNCTIONS ASSIGNMENT
// ==========================================
// Write your code/solutions below each question prompt.
// Run your file with: node Javascript/01-Assignments/01-Functions-Assignment.js

/* 
  QUESTION 1: The Safe Adder
  - Create a function named `safeAdd` that takes two parameters.
  - If either parameter is missing (undefined), return the message: "Please provide both numbers."
  - If either parameter is NOT a number (e.g., a string, boolean, etc.), return: "Error: Both arguments must be numbers."
  - Otherwise, return the sum of the two numbers.
  
  Test cases to uncomment:
  console.log(safeAdd(5, 10));      // Expected: 15
  console.log(safeAdd(5));          // Expected: "Please provide both numbers."
  console.log(safeAdd(5, "10"));    // Expected: "Error: Both arguments must be numbers."
*/

// Write your Q1 solution here:

function safeAdd(num1, num2) {
  if (!num1 || !num2) {
    return "Please provide both numbers."
  }
  if (typeof num1 !== "umber" || typeof num2 !== "number") {
    return "Error: Both arguments must be numbers."
  }
  return num1 + num2
}

console.log(safeAdd(5, 10));      // Expected: 15
console.log(safeAdd(5));          // Expected: "Please provide both numbers."
console.log(safeAdd(5, "10"));    // Expected: "Error: Both arguments must be numbers."

/*
  QUESTION 2: Shopping Cart Total (Rest Operator)
  - Create a function named `calculateTotal` that takes a mandatory `discount` (number) as its first parameter, followed by a dynamic list of item prices using the rest operator.
  - The function should sum all the item prices, apply the discount percentage (e.g., if discount is 10, subtract 10% from the total sum), and return the final total.

  Test cases to uncomment:
  console.log(calculateTotal(10, 100, 200, 300)); // Sum = 600, 10% discount of 600 = 60. Expected: 540
  console.log(calculateTotal(20, 50, 50));       // Sum = 100, 20% discount. Expected: 80
  console.log(calculateTotal(0, 10, 20));         // Sum = 30, 0% discount. Expected: 30
*/

// Write your Q2 solution here:

function calculateTotal(discount, ...prices) {
  let total_sum = 0
  for (let i = 0; i < prices.length; i++) {
    total_sum += prices[i];
  }
  let discount_amount = (discount / 100) * total_sum;
  return total_sum - discount_amount;
}

console.log(calculateTotal(10, 100, 200, 300));
console.log(calculateTotal(20, 50, 50));
console.log(calculateTotal(0, 10, 20));



/*
  QUESTION 3: User Profile Validator (Passing Objects)
  - Create a function named `validateUserProfile` that accepts a `userObject`.
  - The function should print a string message: "Welcome <username> from <city>! Your account status is: <status>."
  - If the property `city` or `status` is missing from the object, use default values:
    - city default: "Unknown"
    - status default: "Inactive"
  - Hint: Use Object Destructuring with default values inside the function parameters or body.

  Test cases to uncomment:
  const userA = { username: "Sachin", city: "Delhi", status: "Active" };
  const userB = { username: "Alex" };
  validateUserProfile(userA); // Expected: "Welcome Sachin from Delhi! Your account status is: Active."
  validateUserProfile(userB); // Expected: "Welcome Alex from Unknown! Your account status is: Inactive."
*/

// Write your Q3 solution here:

function validateUserProfile({ username, city = "Unknown", status = "Inactive" }) {
  return `Welcome ${username} from ${city}! Your account status is: ${status}.`
}

const userA = { username: "Sachin", city: "Delhi", status: "Active" };
const userB = { username: "Alex" };
console.log(validateUserProfile(userA));
console.log(validateUserProfile(userB));


/*
  QUESTION 4: Array Range Picker (Passing Arrays)
  - Create a function named `getFirstAndLast` that takes an array as a parameter.
  - If the array is empty, return: "Array is empty."
  - Otherwise, return a new array containing only the FIRST and the LAST element of the passed array.

  Test cases to uncomment:
  console.log(getFirstAndLast([1, 2, 3, 4, 5])); // Expected: [1, 5]
  console.log(getFirstAndLast(["apple", "banana"])); // Expected: ["apple", "banana"]
  console.log(getFirstAndLast([])); // Expected: "Array is empty."
*/

// Write your Q4 solution here:

function getFirstAndLast(arr) {
  if (arr.length == 0) {
    return "Array is empty."
  }
  return [arr[0], arr[arr.length - 1]]
}

console.log(getFirstAndLast([1, 2, 3, 4, 5]));
console.log(getFirstAndLast(["apple", "banana"]));
console.log(getFirstAndLast([]));