const mongoose = require("mongoose");

const suppliesSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  image: String
});

const Supplies = mongoose.model("supplies", suppliesSchema);

module.exports = Supplies;
