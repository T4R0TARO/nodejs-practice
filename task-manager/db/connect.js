const mongoose = require("mongoose");

// update password and db name in str
const connectionString =
  "mongodb+srv://jmanansaladev:Takodachi1@nodeexpressprojects.shf6xbn.mongodb.net/task-manager-test?retryWrites=true&w=majority";

// mongoose v 6.00 and above / no need to fix deprecation warnings
const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("CONNECT TO DB..."))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
