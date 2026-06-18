const user = {
    name: "Sharma",
    id: 999,
    message: function greet() {
        // console.log(`${this.name} , welcome to our website`)
        // console.log(this);
    }

}

user.message()
user.name = "Sachin"
user.message()
// console.log(this)

// function greet() {
//     const user_name = "John"
//     console.log(this.user_name);
// }

// greet()

// function greet_two() {
//     const username = "Sachin"
//     // console.log(this);
//     console.log(this.username);

// }
// greet_two()

const chai = function () {
    let username = "Sachin"
    console.log(username);
    // console.log(this);
    console.log(this.username);

}
// chai()

const chai_two = () => {
    let username = "Sharma";
    console.log(username);
}
chai_two()

const add = (num1, num2) => {
    return num1 + num2;
}

console.log(add(4, 5));

const add_ = (num1, num2) => num1 + num2;

console.log(add_(4, 5))

const testGlobalArrowThis = () => {
    console.log("Global arrow function 'this' context:", this);
}
testGlobalArrowThis();

// Parentheses are only mandatory when you want to implicitly return an Object Literal.
