// init exported logEvents()
const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// initialize objects
const myEmitter = new MyEmitter();

// add listener for the log event
// on(): listen for event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  // Emit  event
  myEmitter.emit("log", "Log event emitted!");
}, 2000);
