const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  username: String,
  history: [String]
});

const History = mongoose.model("history", historySchema);

module.exports = History;
