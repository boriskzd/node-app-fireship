/*

    to run this script, type: "node index.js" in terminal
    running "node ."  in same directory has same effect, because Node.js looks for an entry point file named index.js

*/

/*
    BASICS
*/

// Basic functions of Node.js runtime, like "global" and "process"

// prints "Hello world!" to the terminal in VS Code
function printHelloWorld() {
	console.log("Hello world!");
}

function demonstrateGlobals() {
	// "global" object provides access to global variables
	// global object serves as the "global" namespace, and any property attached to "global" becomes accessible throughout Node.js app.
	// however, global namespace shouldn't be unnecessary polluted with too many variables, as it canlead to naming conflicts and make it harder to maintain code
	console.log(global.luckyNum); // prints undefined, as luckyNum isn't defined yet
	global.luckyNum = "123"; // create property "luckyNum" in "global" object, and assign "123" to it.
	console.log(global.luckyNum); // prints 123
}

function demonstrateProcess() {
	console.log(process.platform); // prints win32
	console.log(process.env.USERNAME); // prints current Windows users username ( Marc, Luke, Peter, or whatever users username is ). for Linux, use process.env.USER
}

/*
    EVENTS
*/

/*
    USE EXISTING NODE.JS EVENT
*/

process.on("exit", function () {
	// when node.js stops running, run this function
	console.log("Exiting Node.js ...");
	// Do additional cleanup or actions if needed
});

/*
    CREATE OWN EVENT IN NODE.JS
*/

function createAndEmitCustomEvent() {
	// import EventEmitter from 'events' module that is built into Node.js
	const { EventEmitter } = require("events");
	const eventEmitter = new EventEmitter();

	// create "lunch" event
	eventEmitter.on("lunch", () => {
		console.log("LUNCH: yum yum, tasty!");
	});
	// emit "lunch" event, that was created above
	eventEmitter.emit("lunch");
}

// Main function that executes all functionalities
function main() {
	printHelloWorld();
	demonstrateGlobals();
	demonstrateProcess();
	createAndEmitCustomEvent();
}

main();

// TODO: Refactor file system like above, put it in main() func.

/*
    FILE SYSTEM
*/

// 2 types of file reading
const { readFile, readFileSync } = require("fs");

// readFileSync BLOCKS execution of following code ("do this ASAP 1"), until file is read. ( if file is huge, it might take a while )
// this code first logs TXT then ASAP 1.
const txt = readFileSync("./hello.txt", "utf8");
console.log(txt);
console.log("do this ASAP 1"); // won't run until TXT file is read.

// readFile DOESN'T BLOCK execution of following code (do this ASAP 2).
// callback function is the third argument, where we console.log(txt)
// this code first logs ASAP 2, then TXT
readFile("./hello.txt", "utf8", (err, txt) => {
	console.log(txt);
});
console.log("do this ASAP 2");

// PROMISES - are async and non-blocking
// const { readFile: readFilePromises } ---> save function readFile as readFilePromises, because we declared readFile above.
const { readFile: readFilePromises } = require("fs").promises; //

async function hello() {
	const file = await readFilePromises("./hello.txt", "utf8"); // readFile() --> is a function that returns promise when called
	console.log(file);
}
hello();
console.log("do this ASAP 3");

/*
    MODULES & NPM
*/

// Module is a JS file that exports its code
const myModule = require("./my-module");

console.log(myModule);
