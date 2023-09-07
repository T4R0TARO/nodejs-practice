// const EventEmitter = require("events");

// const customEmitter = new EventEmitter();

// customEmitter.on("response", (name, id) => {
//   console.log(`data received ${name} with id:${id} `);
// });
// customEmitter.on("response", () => {
//   console.log(`some other logic here `);
// });

// customEmitter.emit("response", "josh", 34);
// ------------------------------------------------------------

const http = require("http");

// const server = http.createServer((req, res) => {
//     res.end('Welcome')
// })

// Using Event Emiter API
const server = http.createServer();
// emits request event
// subscribe to it / listen for it / respond to it
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
