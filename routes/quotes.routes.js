const express = require("express");
const quotesController = require("../controllers/quotes.controller");

const route = express.Router();

route.get("/", quotesController.getRoot);

route.get("/quote", quotesController.getRandomQuotes);

module.exports = route;
