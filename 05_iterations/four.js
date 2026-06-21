const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "rb", "py", "java"]

for (const key in programming) {
    console.log(`${key} = ${programming[key]}`)
}

// Map example using for...in loop:
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

for (const key in map) {
    console.log(key); // This will not print anything because Maps are not iterable via for...in
}