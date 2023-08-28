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
    // delete file
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    // write file
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    // append file
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nNice to meet you."
    );
    // rename file
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );
    // read new file name
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
