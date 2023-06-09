const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  profession: {
    type: String,
    required: true
  },
  urlImage: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  height: {
    type: String,
    required: true
  },
  telephoneNumber: {
    type: String,
    required: true
  },
  facebook: {
    type: String,
    required: true
  },
  twitter: {
    type: String,
    required: true
  },
  github: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("User", userSchema);
