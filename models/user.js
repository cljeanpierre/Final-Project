const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const usersSchema = new Schema({

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        unique: false,
        required: true
    },

  //   createdAt: {
  //     type: Date,
  //     default: Date.now()
  // }

});

const User = mongoose.model("User", usersSchema);

User.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

User.validPassword = function (password, encrypted) {
  return bcrypt.compareSync(password, encrypted);
}

module.exports = User;