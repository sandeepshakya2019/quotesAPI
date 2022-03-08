const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is the Quotes API");
});

app.get("/quote", (req, res) => {
  res.json({
    Quote:
      "As you deep dive into web developer and the web developement deep dive into you !!! ",
  });
});

app.listen(3000, () => {
  console.log("Listening on the PORT 3000");
});
