

if (true) {
    let a = 10
    const b = 20
    var c = 30
}


console.log(c);


let globalVar = "I am global"

function checkScope() {
    let localVar = "I am local"
    console.log(globalVar)
    console.log(localVar)
}
// console.log(localVar) // It will throw an error
checkScope()

