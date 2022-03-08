const getRoot = (req, res, next) => {
  res.send(
    "This is the root dirtectory use <b>/quote</b> to get strarted with random quotes"
  );
};

const getRandomQuotes = (req, res, next) => {
  res.json({ Quote: "Get A random Code soon Under Developement" });
};

module.exports = {
  getRoot: getRoot,
  getRandomQuotes: getRandomQuotes,
};
