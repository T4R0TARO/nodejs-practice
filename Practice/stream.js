// Sometimes when we have larger files, may not be good to grab all the data all at once

const fs = require("fs");
const path = require("path");

// * Reads file `lorem.txt`
// const rs = fs.createReadStream("./files/lorem.txt", { encoding: "utf8" });
// * Refacotred w/ path
const rs = fs.createReadStream(path.join(__dirname, "files", "lorem.txt"), {
  encoding: "utf8",
});

// * Writes new file 'new-lorem.txt'
// const ws = fs.createWriteStream("./files/new-lorem.txt");
// * Refactored w/ path
const ws = fs.createWriteStream(path.join(__dirname, "files", "new-lorem.txt"));

// * Reads file data form `lorem.txt` then writes file data (dataChunk) to `new-lorem.txt`
// rs.on("data", (dataChunk) => {
//   ws.write(dataChunk);
// });

// * Refactor w/ pipe()
rs.pipe(ws);
