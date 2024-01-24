const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  nom: String,
  prenom: String,
  passwd: String,
  isAdmin: Boolean
});

const Users = mongoose.model("users", userSchema);

module.exports = Users;
