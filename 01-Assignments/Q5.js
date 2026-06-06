// Compare a variable declared but not assigned vs. one assigned null.
// Log both and their typeof. 
// Explain the difference between undefined and null in a comment
let declared;
let assigned = null;
console.log(typeof declared, typeof assigned); 
// undefined is the default value for a variable that has been declared but not assigned a value.
// null is an assignment value that represents no value.