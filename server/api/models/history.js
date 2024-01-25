const mongoose = require('mongoose');

/*
const historySchema = new mongoose.Schema({
  username: String,
  history: [String]
});*/

const itemSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  plannedReturnDate: {
    type: String,
    required: true,
  },
  realReturnDate: {
    type: String,
    required: true,
  },
  isLate: {
    type: Boolean,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  }
});

const historySchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  history: {
    items: {
      type: Map,
      of: itemSchema,
      default: {},
    },
  },
});

const History = mongoose.model("history", historySchema);

module.exports = History;
