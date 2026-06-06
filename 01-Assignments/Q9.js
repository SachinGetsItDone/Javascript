// Given the email "user@example.com", extract and 
// log just the domain (example.com) using indexOf and slice.

const email = "sachinsharma@gmail.com"
console.log(email.slice(email.indexOf("@") + 1))