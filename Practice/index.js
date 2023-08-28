// init fs w/ require()
// const fs = require("fs");

// async refactor fs w/ promises
const fsPromises = require("fs").promises;

// init path w/ require(), we can use path instead of hard coding the filename
const path = require("path");

/**------------------------------
 * ASYNC AWAIT
 --------------------------------*/
const fileOps = async () => {
  try {
    // * read file
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);
    // *delete file
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    // * create new file
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    // * change existing file
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nNice to meet you."
    );
    // * rename existing file
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );
    // * read new file name
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

fileOps();

/** ------------------------
 * CALL BACK HELL VERSION
 ------------------------- */

/** readFile( path , [options], callback )
 * * will read a file
 * path: "./files/starter.txt" || path.join(__dirname, 'files', 'starter.txt')
 * you can convert the encoding w/ `toString()` || `utf8`
 * callback: params (err, data)
 */
// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

/**writeFile(path, filecontent, callback)
 * * will write a new file
 * path: path.join(__dirname, "files", "reply.txt") // we are creating a new file called `reply.txt`
 * filecontent: "Nice to meet you" // specify what we are writing in the new file
 * callback: params (err) // we dont need data because we are create a new file
 */
// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you",
//   (err) => {
//     if (err) throw err;
//     console.log("Write complete");

// appendFile: add/changes content of file
// fs.appendFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "\n\nYes it is Wah.",
//   (err) => {
//     if (err) throw err;
//     console.log("Append complete");

/**rename(path, path w/ new Name, callback)
 * * changes file name
 * path: path.join(__dirname, "files", "reply.txt")
 * path w/ new Name: path.join(__dirname, "files", "newName.txt")
 */
//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "newName.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Rename complete");
//           }
//         );
//       }
//     );
//   }
// );

/**appendFile(path, filecontent, callback)
 ** will add/change an existing file || create a new file if it does not exists
 * path: path.join(__dirname, "files", "test.txt")
 * filecontent: "Testing text"
 */
// fs.appendFile(
//   path.join(__dirname, "files", "test.txt"),
//   "Testing text",
//   (err) => {
//     if (err) throw err;
//     console.log("Append complete");
//   }
// );

// When we run the file `Hello...` will output first then when the file is done being read it will output the `readFile()`
console.log("Hello...");

// Error Handling
// exit on uncaught errors
process.on("uncaughtException", (err) => {
  // sends error message
  console.error(`There was an uncaught error: ${err}`);
  // exits the application
  process.exit(1);
});
