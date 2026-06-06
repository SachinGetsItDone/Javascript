// Predict then verify: 
// 10 + "5", "10" - 5, 
// true + true, "5" * "2". 
// Explain each result in one line.

console.log(10 + "5") // 105 - String concatenation
console.log(10 - "5") // 5 - Type coercion
console.log(true + true) // 2 - Boolean addition
console.log("5" * "4") // 20 - Type coercion
console.log("5" * 2) // 10 - Type coercion
console.log("5" * "two") // NaN - Type coercion
console.log("two" * 5) // NaN - Type coercion