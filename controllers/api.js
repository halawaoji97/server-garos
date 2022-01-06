const Item = require('../models/Item');
const Category = require('../models/Category');
const Bank = require('../models/Bank');
const Booking = require('../models/Booking');
const Member = require('../models/Member');

module.exports = {
  landingPage: async (req, res) => {
    try {
      const mostPopular = await Item.find()
        .select('_id title city  price rate imageId')
        .limit(4)
        .populate({ path: 'imageId', select: '_id imageUrl' });

      const category = await Category.find()
        .select('_id name')
        .limit(3)
        .populate({
          path: 'itemId',
          select: '_id title city  price rate imageId',
          perDocumentLimit: 4,
          populate: {
            path: 'imageId',
            select: '_id imageUrl',
            perDocumentLimit: 1,
          },
        });

      res.status(200).json({ mostPopular, category });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};
