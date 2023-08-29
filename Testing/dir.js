const fs = require("fs");

if (!fs.existsSync("./newDir")) {
  fs.mkdir("./newDir", (err) => {
    if (err) throw err;
    console.log("Directory created");
  });
}

if (fs.existsSync("./newDir")) {
  fs.rmdir("./newDir", (err) => {
    if (err) throw err;
    console.log("Directory removed");
  });
}

// require() : loads core modules in node application
// existsSync() : checks if a file || directory exists in the specified path
// mkdir(): creates a new directory
// rmdir(): removes a directory
