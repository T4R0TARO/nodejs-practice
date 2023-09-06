// Modules
// CommonJS, every file in a module (by default)

// const names = require("./names");
const { john, peter } = require("./names");
const sayHi = require("./utils");
// console.log(names);
const data = require("./alternative-flavor");

require("./mind-gernade"); // if a f() is called in the module it will be called if module is require() even if there is no var assigned

// sayHi("susan");
// sayHi(john);
// sayHi(peter);
