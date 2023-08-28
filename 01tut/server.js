// You should know:
// HTML, CSS, and JS
// Possible experience with other libraries and frameworks (React, NPM)

// How NodeJS differs from Vanilla JS
// 1) Node runs on a server - NOT in a browser (backend not frontend)
// 2) The console is the terminal window
console.log("Hello World");
// 3) global object instead of window object
// console.log(global);

// write `node` in the terminal to enter node
// you can run JS in the terminal
// `ctrl + c` to exit node

// 4) Has Common Core modules that we will explore
// 5) CommonJS modules instead of ES6 modules
// 6) Missing some JS APIs like fetch

const os = require("os"); // init `os`
const path = require("path"); // init `path`

//--------------------------------------------------
// require("./filename") will import the file name
//--------------------------------------------------

// const math = require("./math");

const { add, subtract, multiply, divide, wah } = require("./math"); // require file name and destructure importing function from files

console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));
console.log(wah());

// console.log(os.type()); // Output: operating system type
// console.log(os.version()); // Output: operation system version
// console.log(os.homedir()); // Output: operation system home directory

// console.log(__dirname); // Output: directory name (01tut)
// console.log(__filename); // Output: file name (server.js)

// console.log(path.dirname(__filename)); // path of file name's directory
// console.log(path.basename(__filename)); // path of file name's basename (server.js)
// console.log(path.extname(__filename)); // path of file name's extension name (.js)

// console.log(path.parse(__filename));

/* path of file name parse object
{
  root: 'C:\\',
  dir: 'C:\\Users\\joshm\\Desktop\\01tut',
  base: 'server.js',
  ext: '.js',
  name: 'server'
}
*/
