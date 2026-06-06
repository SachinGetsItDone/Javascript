// Predict the output of 0.1 + 0.2. Why isn't it exactly 0.3? Then log a version fixed to 2 decimal places.

const num_1 = 0.1;
const num_2 = 0.2;

console.log(num_1 + num_2);
// The result is 0.30000000000000004 instead of 0.3 due to the way floating-point numbers are represented in binary, which can lead to precision issues.
 