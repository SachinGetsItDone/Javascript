const emptyArray = [];
const emptyObject = {};
const truthyString = "0";

if (emptyArray) {
    console.log("Array is truthy");
}

if (emptyObject) {
    console.log("Object is truthy");
}

if (truthyString) {
    console.log("String '0' is truthy");
}

const falsyVal1 = 0;
const falsyVal2 = "";
const falsyVal3 = null;
const falsyVal4 = undefined;

if (!falsyVal1) {
    console.log("0 is falsy");
}

if (!falsyVal2) {
    console.log("Empty string is falsy");
}

if (!falsyVal3) {
    console.log("null is falsy");
}

if (!falsyVal4) {
    console.log("undefined is falsy");
}
