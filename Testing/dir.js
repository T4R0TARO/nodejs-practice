const fs = require("fs");

if (!fs.existsSync("./new")) {
  mkdir("./new", (err) => {
    if (err) throw err;
  });
}

if (fs.existsSync("./new")) {
  rmdir("./new", (err) => {
    if (err) throw err;
  });
}
// require() : loads core modules in node application
// existsSync() : checks if a file || directory exists in the specified path
// mkdir(): creates a new directory
// rmdir(): removes a directory
