const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  promo: String,
  passwd: String,
  isAdmin: Boolean
});

const Users = mongoose.model("users", userSchema);

module.exports = Users;
