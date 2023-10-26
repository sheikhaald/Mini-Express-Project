const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const BookS = new Schema({
  Title: String,
  Author: String,
  Price: Number,
  Image: String,
});

module.exports = model("Book", BookS);
