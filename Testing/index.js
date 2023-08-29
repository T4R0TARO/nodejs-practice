/** Test
 * 1. init fs
 * 2. init path
 * 3. error handling
 * Callback version
 * 3. readFile()
 * 4. writeFile()
 * 5. appendFile() new file
 * 6. appendFile() change existing file
 * 7. rename()
 */

const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    // read file
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);
    // write file
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    // unlink file "delete"
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    // append file w/ new file
    // append file change exisiting file
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nI say wah you say wah WAH!"
    );
    // rename file
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );

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

process.on("uncaughtExpection", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
