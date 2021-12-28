const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  full_address: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    default: 'month',
  },
  rate: {
    type: Number,
    default: 0,
  },
  empty_room: {
    type: Number,
    default: 0,
  },
  filled_room: {
    type: Number,
    default: 0,
  },
  categoryId: {
    type: ObjectId,
    ref: 'Category',
  },
  imageId: [
    {
      type: ObjectId,
      ref: 'Image',
    },
  ],
  facilityId: [
    {
      type: ObjectId,
      ref: 'Facility',
    },
  ],
});

module.exports = mongoose.model('Item', itemSchema);
