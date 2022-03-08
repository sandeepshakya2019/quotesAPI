const db = require("../data/quotes.database");

class Quotes {
  static async getRandomQuotes() {
    const quotes = await db.getDb().collection("quotes").find().toArray();
    const randomNum = Math.floor(Math.random() * quotes.length);
    return quotes[randomNum];
  }
}

module.exports = Quotes;
