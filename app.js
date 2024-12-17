import express from "express";
const app = express();
const PORT = 3000;

import {
  getQuotes,
  getQuoteByID,
  addQuote,
  editQuote,
  deleteQuote,
} from "./quote.js";

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Welcome to the inspirational quotes API");
});

app.get('/quotes', async function (req, res) {
  res.json(await getQuotes())
});
// Write a request handler
// Use get request
// It returns object with all quotes
// Use a helper function from quotes.js

app.listen(PORT, function () {
  console.log(`Server is now listening on http://localhost:${PORT}`);
});