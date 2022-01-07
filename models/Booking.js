const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const bookingSchema = new mongoose.Schema({
  booking_start_date: {
    type: Date,
    default: Date.now,
  },
  staying_start_date: {
    type: Date,
    required: true,
  },
  invoice: {
    type: String,
    required: true,
  },
  itemId: {
    _id: {
      type: ObjectId,
      ref: 'Item',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  total_payment: {
    type: Number,
    required: true,
  },
  memberId: {
    type: ObjectId,
    ref: 'Member',
  },
  bankId: {
    type: ObjectId,
    ref: 'Bank',
  },
  payments: {
    proof_payment: {
      type: String,
      required: true,
    },
    bank_from: {
      type: String,
      required: true,
    },
    account_holder: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: 'Proses',
    },
  },
});

module.exports = mongoose.model('Booking', bookingSchema);
