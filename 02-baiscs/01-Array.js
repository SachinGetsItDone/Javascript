let myArr = [1, 2, 3, 4, 5, "sachin", "sharma"]

// Shallow copy 
// let copyArr = myArr
// copyArr[2] = 0
// console.log(myArr);
// console.log(copyArr);

// // Deep copy 
// let deepCopy = JSON.parse(JSON.stringify(myArr))
// deepCopy[2] = 99
// console.log(myArr)
// console.log(deepCopy)

// Array methods

// myArr.push(4)
// myArr.push(4)
// console.log(myArr);
// myArr.pop()
// console.log(myArr)

// myArr.unshift(10)
// console.log(myArr);
// myArr.shift()
// console.log(myArr)
// console.log(myArr.includes(10))
// console.log(myArr.indexOf(3));


const myNewArray = myArr.slice(1, 3);
console.log(myNewArray)
console.log(myArr)
const myNewArray2 = myArr.splice(1, 3);
console.log(myNewArray2)
console.log(myArr)


// Slice print the part of an array excluding the end
// Splice cut out a part of an array from the original one
