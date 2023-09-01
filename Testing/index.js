// Test
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
      "\n\nNice to meet you!"
    );
    // rename
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );
  } catch (err) {
    console.err(err);
  }
};
fileOps();

process.on("uncaughtExpection", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
