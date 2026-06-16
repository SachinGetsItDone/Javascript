// const kimi_user = new Object() // Singleton Object 
// const kimi_user_two = {} // Non-Singleton Object

// kimi_user_two.id = "123"
// kimi_user_two.name = "Sachin"
// kimi_user_two.isLoggedIn = false

// console.table(kimi_user_two)

// const regular_user = {
//     email: "[EMAIL_ADDRESS]",
//     fullname: {
//         username: {
//             firstname: "Sachin",
//             lastname: "Sharma"
//         }
//     }
// }

// console.log(regular_user.fullname?.username.firstname)

// const obj1 = { 1: "a", 2: "b", 3: "c" }
// const obj2 = { 4: "d", 5: "e", 6: "f" }

// console.log(obj1, obj2);


// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

// const obj4 = { ...obj1, ...obj2 }
// console.log(obj4)

const array = [
    {
        id: "123",
        name: "sachin"
    },
    {
        id: "124",
        name: "sharma"
    },
    {
        id: "125",
        name: "kimi"
    }
]

// console.log(array[1].name)

// console.log(Object.keys(array[0]))
// console.log(Object.values(array[0]))
// console.log(Object.entries(array[0]))
// console.log(array[0].hasOwnProperty('id'))

const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Sachin"
}

const { courseInstructor } = course

console.log(courseInstructor)

const schools = {
    name: "DPS",
    address: "New Delhi"
}

const { address: school_address } = schools
console.log(school_address)
