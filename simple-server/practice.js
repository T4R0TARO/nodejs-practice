const express = require("express");
const path = require("path");
const app = express();

// create a public folder to hold copies of static files
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./server.index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("Resource not found...");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
