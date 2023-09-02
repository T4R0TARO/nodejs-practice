/**
 * npm init
 * npm i date-fns
 * npm i uuid
 * npm i nodemon -D
 * .gitignore `node_modules`
 */

// import format from 'data-fns'
const { format } = require("date-fns");
// import uuid from 'uuid'
const { v4: uuid } = require("uuid");

// init fs
const fs = require("fs");
// init fs promises
const fsPromises = require("fs").promises;
// init path
const path = require("path");

/**logEvents() async
 * dataTime: format date `20230831  22:52:43`
 * logItem: `dateTime  748e1524-f94e-48cd-8766-1c6d9b5b08aa   message`
 * try:
 * if directory `logs` does NOT exist, make directory `logs`
 * create and change file `eventLog.txt` in directory `logs` with data `logItem`
 * catch:
 * error handliing
 * @param {*} message
 */
const logEvents = async (message) => {
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }

    await fsPromises.appendFile(
      path.join(__dirname, "logs", "eventLog.txt"),
      logItem
    );
  } catch (err) {
    console.log(err);
  }
};

// export logEvents
module.exports = logEvents;

// console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));
// console.log(uuid());
