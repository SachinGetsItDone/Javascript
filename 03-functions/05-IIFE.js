// immediately invoked Function Expression

(function chai() {
    console.log("Hello World");
})();

(() => {
    console.log("Hello world!")
})();

/*
In JavaScript, variables declared globally can be accessed
or overwritten by other scripts or libraries. An IIFE creates
a local scope immediately, protecting variables inside it from
leaking out into the global scope.
*/

(async () => {
    console.log("Database initialized successfully!");
})();
