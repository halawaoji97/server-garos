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
      const testimonial = {
        _id: 'asd1293uasdads1',
        imageUrl: 'images/testimonial2.jpg',
        name: 'Happy Family',
        rate: 4.55,
        content:
          'What a great trip with my family and I should try again next time soon ...',
        familyName: 'Angga',
        familyOccupation: 'Product Designer',
      };

      res.status(200).json({ mostPopular, category, testimonial });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  detailPage: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Item.findOne({ _id: id })
        .populate({ path: 'facilityId', select: '_id name icon imageUrl' })
        .populate({ path: 'imageId', select: '_id imageUrl' });

      const bank = await Bank.find();

      const testimonial = {
        _id: 'asd1293uasdads1',
        imageUrl: 'images/testimonial1.jpg',
        name: 'Happy Family',
        rate: 4.55,
        content:
          'What a great trip with my family and I should try again next time soon ...',
        familyName: 'Angga',
        familyOccupation: 'Product Designer',
      };

      res.status(200).json({
        ...item._doc,
        bank,
        testimonial,
      });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  bookingPage: async (req, res) => {
    const {
      idItem,
      booking_start_date,
      staying_start_date,
      full_name,
      email,
      phone_number,
      account_holder,
      bank_from,
    } = req.body;

    // if (!req.file) {
    //   return res.status(404).json({ message: 'Image not found' });
    // }
    console.log(idItem);
    console.log(booking_start_date);
    console.log(staying_start_date);
    console.log(phone_number);
    console.log(account_holder);
    console.log(bank_from);
    console.log(email);
    console.log(full_name);

    if (
      idItem === undefined ||
      booking_start_date === undefined ||
      staying_start_date === undefined ||
      full_name === undefined ||
      email === undefined ||
      phone_number === undefined ||
      account_holder === undefined ||
      bank_from === undefined
    ) {
      return res.status(404).json({ message: 'Lengkapi semua field' });
    }

    const item = await Item.findOne({ _id: idItem });

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    item.empty_room -= 1;
    item.filled_room += 1;

    await item.save();
    const invoice = Math.floor(1000000 + Math.random() * 9000000);
    const member = await Member.create({
      full_name,
      email,
      phone_number,
    });

    const newBooking = {
      invoice,
      booking_start_date,
      staying_start_date,
      total_payment: item.price,
      itemId: {
        _id: item.id,
        title: item.title,
        price: item.price,
      },
      memberId: member.id,
      payments: {
        proof_payment: `images/${req.file.filename}`,
        bank_from: bank_from,
        account_holder: account_holder,
      },
    };
    const booking = await Booking.create(newBooking);
    return res.status(200).json({ message: 'Success Booking', booking });
  },
};
