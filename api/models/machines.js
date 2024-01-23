const mongoose = require("mongoose");

const machinesSchema = new mongoose.Schema({
  name: String,
  InStock: Number,
});

const Machines = mongoose.model("machines", machinesSchema);

module.exports = Machines;
