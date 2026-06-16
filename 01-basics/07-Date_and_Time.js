let my_date = new Date()
// console.log(my_date)
// console.log(my_date.toString())
// console.log(my_date.toISOString())
console.table([
  my_date.toJSON(),
  my_date.toLocaleDateString(),
  my_date.toLocaleString(),
  my_date.toLocaleTimeString(),
  my_date.toTimeString(),
  my_date.toUTCString(),
  my_date.getMonth(),
  my_date.getFullYear(),
  my_date.getDay(),
  my_date.getDate(),
  my_date.getHours(),
  my_date.getMinutes(),
  my_date.getSeconds()
])

let my_date_2 = new Date("2020-01-01 5:30")
let my_date_3 = new Date(2020, 0, 1, 5, 30, 0) // month is 0-indexed 
console.table([
  my_date_2.toLocaleString(),
  my_date_3.toLocaleString()
])

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDateOne.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(
  newDate.toLocaleString("default", {
    weekday: "short"
  })
);