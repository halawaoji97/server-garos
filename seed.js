const seeder = require('mongoose-seed');
const mongoose = require('mongoose');

// Connect to MongoDB via Mongoose
seeder.connect(
  'mongodb+srv://garos_db:asrog123@cluster0.u2obw.mongodb.net/garos_db?retryWrites=true&w=majority',
  function () {
    // Load Mongoose models
    seeder.loadModels([
      './models/Category',
      './models/Bank',
      './models/Item',
      './models/Facility',
      './models/Member',
      './models/Image',
      './models/Booking',
      './models/Admin',
    ]);

    // Clear specified collections
    seeder.clearModels(
      [
        'Category',
        'Bank',
        'Item',
        'Member',
        'Facility',
        'Image',
        'Booking',
        'Admin',
      ],

      function () {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
          seeder.disconnect();
        });
      }
    );
  }
);

var data = [
  // start category
  {
    model: 'Category',
    documents: [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901111'),
        name: 'Most Popular',
        itemId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902223') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902224') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902225') },
        ],
      },

      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901112'),
        name: 'Jakarta Utara',
        itemId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902226') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902227') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902228') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902229') },
        ],
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901113'),
        name: 'Jakarta Pusat',
        itemId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902230') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902231') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902232') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902233') },
        ],
      },
    ],
  },
  // end category

  //   Start item
  {
    model: 'Item',
    documents: [
      //   Pluit
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
        title: 'Tabby Town',
        price: 800000,
        rate: 4.5,
        city: 'Jakarta Timur',
        full_address:
          'Jl. Cipinang Muara I No.29, Cipinang Muara, Kecamatan Jatinegara',
        empty_room: 54,
        filled_room: 20,
        description:
          'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'month',
        imageId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb1') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb2') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb3') },
        ],
        facilityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa09') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa10') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa11') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa12') },
        ],
        categoryId: '5e96cbe292b97300fc901111',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
        title: 'Cipinang',
        price: 800000,
        rate: 4.3,
        city: 'Jakarta Utara',
        full_address: 'Jl. Pelepah Blok R no 4',
        empty_room: 60,
        filled_room: 30,
        description:
          'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'month',
        imageId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb4') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb5') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb6') },
        ],
        facilityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
        ],
        categoryId: '5e96cbe292b97300fc901111',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
        title: 'Kelapa Gading',
        price: 800000,
        rate: 5,
        city: 'Jakarta Utara',
        full_address: 'Jl. Indah no 40',
        empty_room: 90,
        filled_room: 36,
        description:
          'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'month',
        imageId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb7') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb8') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb9') },
        ],
        facilityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
        ],
        categoryId: '5e96cbe292b97300fc901111',
      },
    ],
  },
  //   End item

  // start image
  {
    model: 'Image',
    documents: [
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb1'),
        imageUrl: 'images/image-mostpicked-1-min.jpg',
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb2'),
        imageUrl: 'images/image-mostpicked-2-min.jpg',
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb3'),
        imageUrl: 'images/image-mostpicked-3-min.jpg',
      },
    ],
  },
  // End image

  // start facility
  {
    model: 'Facility',
    documents: [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01'),
        name: 'bedroom',
        imageUrl: 'images/feature-1.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02'),
        name: 'living room',
        imageUrl: 'images/feature-2.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03'),
        name: 'televison',
        imageUrl: 'images/feature-3.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
    ],
  },
  // end facility

  // start booking
  {
    model: 'Booking',
    documents: [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cee1'),
        invoice: 1231231,
        booking_start_date: '12-12-2020',
        staying_start_date: '12-12-2020',
        itemId: {
          _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
          title: 'Pluit',
          price: 800000,
        },
        total_payment: 800000,
        memberId: mongoose.Types.ObjectId('5e96cbe292b97300fc903333'),
        bankId: mongoose.Types.ObjectId('5e96cbe292b97300fc903323'),
        payments: {
          proof_payment: 'images/buktibayar.jpeg',
          bank_from: 'BCA',
          status: 'Proses',
          account_holder: 'ang',
        },
      },
    ],
  },
  // end booking

  // start member
  {
    model: 'Member',
    documents: [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903333'),
        full_name: 'Elfin Sanjaya',
        email: 'elfinsanjaya12@gmail.com',
        phone_number: '082377954008',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903334'),
        full_name: 'Yein Narayana',
        email: 'elfinsanjaya1207@gmail.com',
        phone_number: '082377954008',
      },
    ],
  },
  // end member

  // start bank
  {
    model: 'Bank',
    documents: [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903322'),
        bank_name: 'Mandiri',
        account_number: '089898',
        name: 'elfin',
        imageUrl: 'images/logo bca.png',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903323'),
        bank_name: 'BCA',
        account_number: '878678',
        name: 'elfin',
        imageUrl: 'images/logo mandiri.png',
      },
    ],
  },
  // end bank

  // start admin
  {
    model: 'Admin',
    documents: [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903345'),
        email: 'admin@gmail.com',
        password: 'rahasia',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903346'),
        email: 'superadmin@gmail.com',
        password: '123456',
      },
    ],
  },
  // end admin
];
