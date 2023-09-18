const express = require("express");
const app = express();
const { holoMyth } = require("./data");

app.get("/", (req, res) => {
  res.send(`<h1>Homepage</h1><a href="/api/talents"></a>`);
});

app.get("/api/talents", (req, res) => {
  const genTalents = holoMyth.map((talent) => {
    const { id, name, mascot } = talent;
    return { id, name, mascot };
  });
  res.json(genTalents);
});

app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`);
});
