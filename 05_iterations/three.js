const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

const greetings = "hello";
for (const char of greetings) {
    console.log(char);
}

const map = new Map()
map.set("name", "Sachin")
map.set("class", "2nd year college")
map.set("language", "JavaScript")

for (const key of map) {
    console.log(key);
}

// console.log(map);



// const map = new Map();
// map.set('IN', "India");
// map.set('USA', "United States of America");
// map.set('FR', "France");

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
};

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }
