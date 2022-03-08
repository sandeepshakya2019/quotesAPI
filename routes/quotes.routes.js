const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
  res.send("This is the Quotes API");
});

route.get("/quote", (req, res) => {
  res.json({
    Quote:
      "As you deep dive into web developer and the web developement deep dive into you !!! ",
  });
});

module.exports = route;
