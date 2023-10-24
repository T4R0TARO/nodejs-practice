// populate.js: populates our mongoDB database with our JSON data
require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");
const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany(); // clears products search list
    await Product.create(jsonProducts); // create product list from data
    console.log("Success!");
    process.exit(0); // if successful exit file
  } catch (error) {
    console.log(error);
    process.exit(1); // if unsuccessful remain in file run error
  }
};

start();
