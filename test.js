const session = {
    username: "Sachin",
    greetUser: function () {
        return `Hello, ${this.username}!`;
    },
    greetUserArrow: () => {
        console.log(this);

        return `Hello, ${session.username}!`; // Buggy: returns "Hello, undefined!"
    }
};

console.log(session.greetUserArrow());
console.log(session.greetUser());
