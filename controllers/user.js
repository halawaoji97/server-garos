const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

module.exports = {
  signin: async (req, res) => {
    const { email, password } = req.body;

    try {
      const existingUser = await User.findOne({ email });

      if (!existingUser)
        return res.status(404).json({ message: "User doesn't exist" });

      const isPasswordCorrect = await bcrypt.compare(
        password,
        existingUser.password
      );

      if (!isPasswordCorrect)
        return res.status(400).json({ message: 'Invalid credentials' });

      const token = jwt.sign(
        { email: existingUser.email, id: existingUser._id },
        'test',
        {
          expiresIn: '1h',
        }
      );

      res.status(200).json({ result: oldUser, token });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
      console.log(error);
    }
  },

  signup: async (req, res) => {
    const { email, password, full_name, full_address, phone_number } = req.body;
    try {
      const existingUser = await User.findOne({ email });

      if (!existingUser)
        return res.status(404).json({ message: 'User already exists' });

      const hashedPassword = await bcrypt.hash(password, 12);

      const result = await User.create({
        email,
        password: hashedPassword,
        full_name,
        full_address,
        phone_number,
      });

      const token = jwt.sign(
        {
          email: result.email,
          id: result.id,
        },
        'test',
        {
          expiresIn: '1h',
        }
      );

      res.status(201).json({ result, token });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
      console.log(error);
    }
  },
};
