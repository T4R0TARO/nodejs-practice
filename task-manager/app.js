const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.send("Task Manager App");
});

const port = 3500;
app.listen(port, console.log(`Server is listening on port ${port}...`));
