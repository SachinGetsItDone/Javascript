// Comparison gotchas — predict each before running: 2 > 1 > 1, "a" < "b", null == undefined, null === undefined, NaN === NaN


console.log(2 > 1 > 1)
// this is because of 1 > 1 is false

console.log("a" < "b")

console.log(NaN === NaN)
console.log(NaN == NaN) // NaN is not equal to anything, including itself
