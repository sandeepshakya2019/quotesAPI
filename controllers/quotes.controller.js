const quotesModel = require("../model/quotes.model");

const getRoot = (req, res, next) => {
  res.send(
    "This is the root dirtectory use <b>/quote</b> to get strarted with random quotes"
  );
};

const getRandomQuotes = async (req, res, next) => {
  const randomQuotes = await quotesModel.getRandomQuotes();
  res.json({ Quote: randomQuotes.text });
};

module.exports = {
  getRoot: getRoot,
  getRandomQuotes: getRandomQuotes,
};
