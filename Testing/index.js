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
    // readFile
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);
    // writeFile
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    // appendFile
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nWah wah wah"
    );
    // rename
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );
    // readFile new file
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
