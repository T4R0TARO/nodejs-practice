const express = require("express");
const app = express();
// import data
const { holoMyth } = require("./data");

app.get("/", (req, res) => {
  res.send(`<h1>Homepage</h1><a href="/api/talents">HoloMyth</a>`);
});

// GET talents data w/ specified data
app.get("/api/talents", (req, res) => {
  const genTalents = holoMyth.map((talent) => {
    const { id, name, mascot } = talent;
    return { id, name, mascot };
  });
  res.json(genTalents);
});

// GET singleTalent data
app.get("/api/talents/:talentID", (req, res) => {
  const { talentID } = req.params;
  const singleTalent = holoMyth.find(
    (talent) => talent.id === Number(talentID)
  );
  // Error handling
  if (!singleTalent) {
    res.status(404).send(`Talent ID was not found`);
  }
  return res.json(singleTalent);
});

app.get("/api/talents/:talentID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("Hello World...");
});

app.listen(5000, () => {
  console.log(`Server listening on port 5000...`);
});
