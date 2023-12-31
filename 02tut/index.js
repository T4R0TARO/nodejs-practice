const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    // data // readFile
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);
    // unlink 'delete'
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    // writeFile
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    // appendFile
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      `\n\nNice to meet you`
    );
    // rename
    await fsPromises.rename(
      path.join(__dirname, "files", `promiseWrite.txt`),
      path.join(__dirname, "files", "promiseComplete.txt")
    );
    // newData // readFile
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

// // readFile
// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// // writeFile
// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to me you",
//   (err) => {
//     if (err) throw err;
//     console.log("Write complete");

//     //appendFile
//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\n\nYes it",
//       (err) => {
//         if (err) throw err;
//         console.log("Append complete");

//         //rename
//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "newReply.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Rename complete");
//           }
//         );
//       }
//     );
//   }
// );

// exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
