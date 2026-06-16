const name = Symbol("Sachin")
// console.log(name);

const myjs = {
    "full name": "Sachin Sharma",
    [name]: "Sachin",
    email: "Sachin@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Tuesday", "Wednesday"]
}

console.log(myjs["full name"])
console.log(myjs[name])
console.log(myjs["email"])

console.log(Object.keys(myjs))
console.log(Object.values(myjs))
console.table(Object.entries(myjs))

myjs.email = "Sharma@gmail.com"
console.log(myjs.email)
// Object.freeze(myjs)
myjs.email = "sachin@A.com"
console.table(myjs)

myjs.greeting = function () {
    console.log("Hello world!!")
}

myjs.greeting_two = function () {
    console.log(`hello ${this["full name"]} how are you?`);

}

// console.log(myjs.greeting);
// console.log(myjs.greeting());
console.log(myjs.greeting_two());
console.log(myjs.greeting_two);




