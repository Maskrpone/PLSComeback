const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  promo: String,
  passwd: String,
  isAdmin: String
});


/*
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
    unique: true,
  },
  promo: String,
  passwd: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, { collection: 'PlsComeBack.users' }); // Nom de la collection
*/
const Users = mongoose.model('users', userSchema);

module.exports = Users;

