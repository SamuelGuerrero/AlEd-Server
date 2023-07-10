const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  urlImage: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("Invitado", userSchema);
