const express = require("express");
const path = require("path");
const { holoMyth } = require("./data");
const app = express();

app.get("/", (req, res) => {
  res.send('<h1>Homepage</h1><a href="/api/talents">Hololive EN Myth</a>');
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
