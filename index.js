const express = require("express");
const quoteRoute = require("./routes/quotes.routes");

const app = express();

app.use("/", quoteRoute);

app.listen(3000, () => {
  console.log("Listening on the PORT 3000");
});
