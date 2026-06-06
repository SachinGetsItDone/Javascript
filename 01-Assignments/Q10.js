// Round 4.567 to 2 decimal places, 
// round it up, round it down, and round 
// to the nearest integer — using the right Math method for each.

let num = Number(4.567)
let round_2 = Number(num.toFixed(2)); // toFixed returns a string, so we need to convert it back to a number
console.log(round_2, typeof round_2); 
// another way of doing it is using Math.round() with a multiplier
let round_2_alt = Math.round(num * 100) / 100;
console.log(round_2_alt, typeof round_2_alt);
