const mongoose = require("mongoose");

const toolsSchema = new mongoose.Schema({
  name: String,
  InStock: Number,
});

const Tools = mongoose.model("tools", toolsSchema);

module.exports = Tools;
