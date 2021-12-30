const mongoose = require('mongoose');

// create schema

const memberSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Member', memberSchema);
