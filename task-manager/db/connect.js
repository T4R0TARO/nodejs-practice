//  * 2. Mongoose Setup
const mongoose = require("mongoose");
// * 1. Connect MongoDB w/ connection string (Setup)
// const connectionString =
//   "mongodb+srv://jmanansaladev:Takodachi1@nodeexpressprojects.shf6xbn.mongodb.net/task-manager-test?retryWrites=true&w=majority";

//   mongoose v 6.00 and above / no need to fix deprecation warnings

// * 3. Mongoose connection w/ err handling
const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("CONNECT TO DB..."))
    .catch((err) => console.log(err));
};

// * 4. Import to app.js
module.exports = connectDB;
