const fs = require("fs");

// * if directory does NOT exists create directory
if (!fs.existsSync("./new")) {
  // * Create new directory
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory created");
  });
}

// * if directory DOES exists remove directory
if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory removed");
  });
}
