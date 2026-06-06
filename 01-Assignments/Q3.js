// Create a variable holding the string "25".
// Convert it to a real number two different ways, and prove it worked with typeof.

const strNum = "25";
const num1 = Number(strNum);
const num2 = parseInt(strNum);
const num3 = +strNum; // The unary plus operator converts the string to a number
const num4 = strNum * 1;
const num5 = strNum / 1;
const num6 = Math.floor(strNum);


console.log(num1, typeof num1);
console.log(num2, typeof num2);
console.log(num3, typeof num3);
console.log(num4, typeof num4);
console.log(num5, typeof num5);
console.log(num6, typeof num6);