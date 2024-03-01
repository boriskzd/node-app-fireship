// to run this script, type: "node index.js" in terminal
// running "node ."  in same directory has same effect, because Node.js looks for an entry point file named index.js

console.log("hello world"); // prints hello world

console.log(global.luckyNum); // prints undefined

// global provides acces to global variables
// create property luckyNum in global variables, and assign 23 to it.
global.luckyNum = "23";

console.log(global.luckyNum); // prints 23

console.log(process.platform); // prints win32
console.log(process.env.USERNAME); // prints current Windows users username. for Linux, use process.env.USER

process.on("exit", function () {
	// when node exits, run this function
});
