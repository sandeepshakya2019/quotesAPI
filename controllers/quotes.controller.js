const quotesModel = require("../model/quotes.model");

const getRoot = (req, res, next) => {
  res.send(
    "This is the root dirtectory use <b>/quote</b> to get strarted with random quotes"
  );
};

const getRandomQuotes = async (req, res, next) => {
  try {
    const randomQuotes = await quotesModel.getRandomQuotes();
    res.json({ Quote: randomQuotes.text });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getRoot: getRoot,
  getRandomQuotes: getRandomQuotes,
};
