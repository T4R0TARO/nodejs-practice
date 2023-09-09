const express = require("express");
const path = require("path");
const app = express();

// setup static and middleware
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./server/index.html"));
// });

app.get("/about", (req, res) => {
  res.status(200).send("Into the void...");
});

app.all("*", (req, res) => {
  res.status(404).send("Sorry, the resource was not found :(...");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
