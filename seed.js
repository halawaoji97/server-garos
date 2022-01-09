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
        title: 'Kemayoran',
        price: 800000,
        rate: 3.5,
        city: 'Jakarta Pusat',
        full_address:
          'Kemayoran, RT.15/RW.1, South Gunung Sahari, Kemayoran, Central Jakarta City, Jakarta 10610',
        empty_room: 54,
        filled_room: 20,
        description:
          'Dekat dengan pusat pembelajaan dan sangat cocok untuk mahasiswa dan karyawan karena di lengkapi dengan berbagai fasilitas yang mendukung.',
        unit: 'month',
        imageId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb1') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb2') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb3') },
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
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
        title: 'Cipinang',
        price: 600000,
        rate: 4.3,
        city: 'Jakarta Timur',
        full_address:
          'Jl. Cipinang Baru Raya No.5, RW.11, Cipinang, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13240',
        empty_room: 60,
        filled_room: 30,
        description:
          'Berlokasi di daerah Cipinang, sudah menjamin kenyamanan dan keamanan bagi siapa saja yang ingin ngekost di sini, termasuk dalam perumahan dengan keamanan yang sangat ketat.',
        unit: 'month',
        imageId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb4') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb5') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb6') },
        ],
        facilityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') },
        ],
        categoryId: '5e96cbe292b97300fc901111',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
        title: 'Kelapa Gading',
        price: 800000,
        rate: 5,
        city: 'Jakarta Utara',
        full_address:
          'Jalan Boulevard Raya, RT.2/RW.17, East Kelapa Gading, Kelapa Gading, North Jakarta City, Jakarta',
        empty_room: 90,
        filled_room: 36,
        description:
          'Lokasi yang sangat elit di karenakan berlokasi di daerah Kelapa Gading, dengan dengan pusat pembelanjaan dan mudah mendapatkan transportasi jika ingin bepergian, serta di sediakan parkir yang cukup luas untuk penghuni kost.',
        unit: 'month',
        imageId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb7') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb8') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb9') },
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
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
        title: 'Menteng',
        price: 800000,
        rate: 4.3,
        city: 'Jakarta Pusat',
        full_address:
          'Jl. Cikini Raya No.2, RT.16/RW.1, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330',
        empty_room: 130,
        filled_room: 92,
        description:
          'Dekat dengan keramaian dan pusat pembelanjaan, toko elektronik dan cocok untuk kamu yang saat ini sedang menari kost yang murah namun berkualitas, karena tingakt keamanan sangat di utamakan.',
        unit: 'month',
        imageId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd10') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd11') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd12') },
        ],
        facilityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa13') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa14') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa15') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa16') },
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
        // kemayoran
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb1'),
        imageUrl: 'images/kemayoran.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb2'),
        imageUrl: 'images/bed_room_kemayoran.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb3'),
        imageUrl: 'images/kitchen_room_kemayoran.jpg',
      },
      // Cipinang
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb4'),
        imageUrl: 'images/cipinang.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb5'),
        imageUrl: 'images/bed_room_cipinang.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb6'),
        imageUrl: 'images/kitchen_room_cipinang.jpg',
      },

      // kelapa gading
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb7'),
        imageUrl: 'images/kel_gading.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb8'),
        imageUrl: 'images/bed_room_kel_gading.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb9'),
        imageUrl: 'images/kitchen_room_kel_gading.jpg',
      },

      // Menteng
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd10'),
        imageUrl: 'images/menteng.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd11'),
        imageUrl: 'images/bed_room_menteng.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd12'),
        imageUrl: 'images/kitchen_room_menteng.jpg',
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
        name: 'wifi',
        icon: 'wifi',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02'),
        name: 'kasur',
        icon: 'bed',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03'),
        name: 'televisi',
        icon: 'tv',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04'),
        name: 'kursi',
        icon: 'chair',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },

      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05'),
        name: 'wifi',
        icon: 'wifi',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06'),
        name: 'kasur',
        icon: 'bed',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07'),
        name: 'televisi',
        icon: 'tv',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08'),
        name: 'kursi',
        icon: 'chair',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },

      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa09'),
        name: 'wifi',
        icon: 'wifi',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa10'),
        name: 'kasur',
        icon: 'bed',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa11'),
        name: 'televisi',
        icon: 'tv',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa12'),
        name: 'kursi',
        icon: 'chair',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
      },

      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa13'),
        name: 'wifi',
        icon: 'wifi',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa14'),
        name: 'kasur',
        icon: 'bed',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa15'),
        name: 'televisi',
        icon: 'tv',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa16'),
        name: 'kursi',
        icon: 'chair',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
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
        staying_start_date: '01-12-2020',
        itemId: {
          _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
          title: 'Pluit',
          price: 800000,
        },
        total_payment: 800000,
        memberId: mongoose.Types.ObjectId('5e96cbe292b97300fc903333'),
        bankId: mongoose.Types.ObjectId('5e96cbe292b97300fc903323'),
        payments: {
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
        full_name: 'Oji Halawa',
        email: 'ojihalawa@gmail.com',
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
