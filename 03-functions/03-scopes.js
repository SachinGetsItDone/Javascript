

// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
// }


// console.log(c);


// let globalVar = "I am global"

// function checkScope() {
//     let localVar = "I am local"
//     console.log(globalVar)
//     console.log(localVar)
// }
// // console.log(localVar) // It will throw an error
// checkScope()


function one() {
    const user = "Sachin";
    function two() {
        const game = "Ghost of tsushima";
        // console.log(game);
    }
    // console.log(user);
    two()
}
// console.log(user);
one();

if (true) {
    const user = "Sachin"

    if (user == "Sachin") {
        const website = "youtube";
        // console.log(user + website);
    }
    // console.log("Done");
}

console.log(addOne(5));

function addOne(num) {
    return num + 1
}

const addTwo = function (num) {
    return num + 2
}

console.log(addTwo(5));