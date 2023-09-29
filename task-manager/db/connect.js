const mongoose = require("mongoose");

// mongoose v 6.00 and above / no need to fix deprecation warnings
const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("CONNECT TO DB..."))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
