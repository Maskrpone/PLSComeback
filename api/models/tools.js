const mongoose = require("mongoose");

const toolsSchema = new mongoose.Schema({
  name: String,
  InStock: Number,
  image: String
});

const Tools = mongoose.model("tools", toolsSchema);

module.exports = Tools;
