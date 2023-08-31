// Test

const fsPromises = require("fs").promises;
const path = require("path");

const filesOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);
    // unlink()
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    // writeFile()
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    // appendFile()
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nNice to meet you Wah"
    );
    // rename()
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );
    // read newData
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

filesOps();

process.on("uncaughtExpection", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
