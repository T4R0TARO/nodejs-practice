// Sometimes when we have larger files, may not be good to get the data all at once
const fs = require("fs");
const path = require("path");
// createReadStream
const rs = fs.createReadStream(path.join(__dirname, "files", "lorem.txt"), {
  encoding: "utf8",
});
// createWriteStream
const ws = fs.createWriteStream(path.join(__dirname, "files", "newLorem.txt"));

// on && write || pipe
// rs.on("data", (dataChunk) => {
//   ws.write(dataChunk);
// });

rs.pipe(ws);
