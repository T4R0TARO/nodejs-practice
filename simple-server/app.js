const express = require("express");
const app = express();
const { holoMyth } = require("./data");

app.get("/", (req, res) => {
  res.send(`<h1>Homepage</h1><a href="#"></a>`);
});

app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`);
});
