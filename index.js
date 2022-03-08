const express = require("express");
const quoteRoute = require("./routes/quotes.routes");
const db = require("./data/quotes.database");

const app = express();

app.use("/", quoteRoute);

app.use((error, req, res, next) => {
  res.status(500).json({
    message: "Something Went Wrong",
  });
});
app.listen(3000, () => {
  console.log("Listening on the PORT 3000");
  db.connectToDatabase()
    .then(() => {
      console.log("Mongo Connected Success");
    })
    .catch((err) => {
      console.log(err);
    });
});
