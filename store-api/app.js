const express = require("express");
const app = express();
const notFoundMiddleWare = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const connectDB = require("./db/connect");

// TODO: connect to mongoDB
// TODO: set up routes
// TODO: set up controllers
// TODO: set up mongoose schema models

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">product route</a>');
});

// products route
app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

const port = 3000;

const start = async () => {
  try {
    // await connectDB();
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
