/*

    to run this script, type: "node index.js" in terminal
    running "node ."  in same directory has same effect, because Node.js looks for an entry point file named index.js

	npm init -y 
	creates package.json file

*/

/*
    BASICS
*/

// Basic functions of Node.js runtime, like "global" and "process"

function printHelloWorld() {
	// prints "Hello world!" to the terminal in VS Code
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
	// The process object provides information about, and control over, the current Node.js process.
	// It allows interaction with the enviroment in which the Node.js script is running.
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

/*
    FILE SYSTEM
*/

// TODO: Clean up this code and comments
// Demonstration of various methods of reading files in Node.js
function readFileExample() {
	/*
		IMPORTANT: Imports ( 'require' ) should be done outside functions, but it is inside this function so we know what part
		of code is used wit which functionality.
		With ES6 'import', they should always be done on top level of the file!
	*/

	// 2 types of file reading
	const { readFile, readFileSync } = require("fs");
	// readFile() --> is a function that returns promise when called. In next example we import promises from that function.
	// const { readFile: readFilePromises } ---> save function readFile as readFilePromises, because we declared readFile above.
	const { readFile: readFilePromises } = require("fs").promises;

	// ! Synchronous file read operation !
	// readFileSync BLOCKS execution of following code ("do this ASAP 1"), until file is read. ( if file is huge, it might take a while )
	// this code first logs TXT then ASAP 1.
	const txt = readFileSync("./hello.txt", "utf8");
	console.log(txt);
	console.log("do this ASAP 1"); // won't run until TXT file is read.

	// ! Asynchronous file read operation using callbacks !
	// readFile DOESN'T BLOCK execution of following code (do this ASAP 2).
	// callback function is the third argument, where we console.log(txt)
	// this code first logs ASAP 2, then TXT
	readFile("./hello.txt", "utf8", (err, txt) => {
		console.log(txt);
	});
	console.log("do this ASAP 2");

	// ! Asynchronous file read operation using Promises !
	// PROMISES - are async and non-blocking.
	// function readFilePromises was imported by: require("fs").promises
	async function hello() {
		const file = await readFilePromises("./hello.txt", "utf8");
		console.log(file);
	}
	hello();
	console.log("do this ASAP 3");
}

/*
    MODULES & NPM
*/

function customModules() {
	// This function demonstrates how to import and use custom modules in Node.js
	// Module is a JS file that exports its code
	// check file called my-module.js in current folder to see how custom module looks like
	const myModule = require("./my-module");
	console.log(myModule);
}

/*
	________________________________________________
	Main function that executes all functionalities.
	________________________________________________

*/

// ------ UNCOMMENT FUNCTIONS TO RUN THEM !!! ------

function main() {
	// printHelloWorld();
	// demonstrateGlobals();
	// demonstrateProcess();
	// createAndEmitCustomEvent();
	// readFileExample();
	// customModules();
}
main();

const express = require("express");
const app = express();
