const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
  bank_name: {
    type: String,
    required: true,
  },
  account_number: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Bank', bankSchema);
