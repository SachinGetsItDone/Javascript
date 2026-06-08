let myArr = [1, 2, 3, 4, 5, "sachin", "sharma"]

// Shallow copy 
// let copyArr = myArr
// copyArr[2] = 0
console.log(myArr);
// console.log(copyArr);

// // Deep copy 
// let deepCopy = JSON.parse(JSON.stringify(myArr))
// deepCopy[2] = 99
// console.log(myArr)
// console.log(deepCopy)

// Array methods

myArr.push(4)
myArr.push(4)
console.log(myArr);
myArr.pop()
console.log(myArr)
