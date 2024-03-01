// to run this script, type: "node index.js" in terminal
// running "node ."  in same directory has same effect, because Node.js looks for an entry point file named index.js

console.log("hello world"); // prints hello world ( to the terminal in VS Code )

console.log(global.luckyNum); // prints undefined
// global provides access to global variables
// create property luckyNum in global variables, and assign 23 to it.
global.luckyNum = "123";
console.log(global.luckyNum); // prints 123

console.log(process.platform); // prints win32
console.log(process.env.USERNAME); // prints current Windows users username ( Marc, Luke, Peter, or whatever users username is ). for Linux, use process.env.USER

process.on("exit", function () {
	// when node exits, run this function
});

/*
    CREATE OWN EVENT IN NODE.JS
*/

// import EventEmitter from 'events' module that is built into Node.js
const { EventEmitter } = require("events");
const eventEmitter = new EventEmitter();

// create event
eventEmitter.on("lunch", () => {
	console.log("yum yum, tasty!");
});
// emit event that was created above
eventEmitter.emit("lunch");
