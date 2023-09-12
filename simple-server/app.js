const express = require("express");
const app = express();
const { holoMyth } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Homepage</h1><a href="/api/talents">Hololive EN Myth</a>');
});

app.get("/api/talents", (req, res) => {
  const genTalents = holoMyth.map((talent) => {
    const { id, name, mascot } = talent;
    return { id, name, mascot };
  });
  res.json(genTalents);
});

app.get("/api/talents/:talentID", (req, res) => {
  const { talentID } = req.params;

  const singleTalent = holoMyth.find(
    (talent) => talent.id === Number(talentID)
  );

  if (!singleTalent) {
    res.status(404).send("Talent resourse info not found...");
  }

  return res.json(singleTalent);
});

app.get("/api/talents/:talentID/reviews/:reviewID", (req, res) => {
  // console.log(req.params);
  // console.log("WAH");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
