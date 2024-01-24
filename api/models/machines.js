const mongoose = require("mongoose");

const machinesSchema = new mongoose.Schema({
  name: String,
  InStock: Number,
  image: String
});

const Machines = mongoose.model("machines", machinesSchema);

module.exports = Machines;
