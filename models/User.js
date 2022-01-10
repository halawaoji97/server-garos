const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  full_address: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
});

// adminSchema.pre('save', async function (next) {
//   const user = this;
//   if (user.isModified('password')) {
//     user.password = await bcrypt.hash(user.password, 8);
//   }
// });

module.exports = mongoose.model('User', userSchema);
