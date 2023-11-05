const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("CONNECT TO DB..."))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
