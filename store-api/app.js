require("dotenv").config(); // .env
require("express-async-errors"); // async errors
const express = require("express");
const app = express();
const notFoundMiddleWare = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send(
    '<h1>TEST Store API</h1><a href="/api/v1/products">product route</a>'
  );
});

app.use("/api/v1/products", productsRouter);

// products route
app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
