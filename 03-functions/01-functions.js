function DragonBallZ() {
    console.log("hi this is a DBZ function and i am shenron");
}

const call_shenron = DragonBallZ()
// console.log(DragonBallZ); // so basically this is a refrence that tells where the function is like [Funtion: DragonBallZ]
// console.log(DragonBallZ()); // this one executes the function 
console.log(call_shenron);

function add(num1, num2) {
    return num1 + num2
}
// this is a parameterised function because it has parameters 
console.log(add(4, 5))
const result = add(4, "5")
console.log(result)

function username(username) {
    return `hi ${username}, welcome to this 01-function.js script`
}
console.log(username("Sachin"))

// defining datatypes in function parameters
// this is a typescript syntax 
// function addition(num_1: number, num_2: number) { 
//     return num_1 + num_2;
// }

function Quest(name = "Player") {
    return `${name} have started a quest.`
}

let player_1 = Quest()
let player_2 = Quest("Sachin")

console.log(player_1);
console.log(player_2);

function Quest_check(player_name) {
    if (!player_name) {
        return "Please enter your username and proceed."
    }
    return `Welcome ${player_name} to this new world of your, tear of the kingdom.`
}

console.log(Quest_check("Kimi"))
console.log(Quest_check())
