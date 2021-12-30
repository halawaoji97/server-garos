const Category = require('../models/Category');
const Item = require('../models/Item');
const Image = require('../models/Image');
const Facility = require('../models/Facility');
const Bank = require('../models/Bank');
const path = require('path');

const fs = require('fs-extra');

module.exports = {
  viewDashboard: (req, res) => {
    try {
      res.render('admin/dashboard/view_dashboard', {
        title: 'Asrog | Dashboard',
      });
    } catch (error) {
      res.redirect('/admin/dashboard');
    }
  },

  viewCategory: async (req, res) => {
    try {
      const alertMessage = req.flash('alertMessage');
      const alertStatus = req.flash('alertStatus');
      const alert = { message: alertMessage, status: alertStatus };
      const categories = await Category.find();
      res.render('admin/category/view_category', {
        title: 'Asrog | Category',
        categories,
        alert,
      });
    } catch (error) {
      res.redirect('/admin/category');
    }
  },

  addCategory: async (req, res) => {
    try {
      const { name } = req.body;
      const category = await Category.create({ name });
      req.flash('alertMessage', 'Success add category');
      req.flash('alertStatus', 'success');
      res.redirect('/admin/category', {
        category,
      });
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/admin/category');
    }
  },

  editCategory: async (req, res) => {
    try {
      const { id, name } = req.body;
      const category = await Category.findOne({ _id: id });
      category.name = name;
      await category.save();
      res.redirect('/admin/category');
      req.flash('alertMessage', 'Success update category');
      req.flash('alertStatus', 'success');
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/admin/category');
    }
  },

  deleteCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findOne({ _id: id });
      await category.remove();
      req.flash('alertMessage', 'Success delete category');
      req.flash('alertStatus', 'success');

      res.redirect('/admin/category');
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/admin/category');
    }
  },

  viewItem: async (req, res) => {
    try {
      const items = await Item.find()
        .populate({ path: 'imageId', select: 'id imageUrl' })
        .populate({ path: 'categoryId', select: 'id name' });

      console.log(items);
      const category = await Category.find();
      const alertMessage = req.flash('alertMessage');
      const alertStatus = req.flash('alertStatus');
      const alert = { message: alertMessage, status: alertStatus };
      res.render('admin/item/view_item', {
        title: 'Asrog | Item',
        category,
        alert,
        items,
        action: 'view',
      });
    } catch (error) {
      res.redirect('/admin/item');
    }
  },

  addItem: async (req, res) => {
    try {
      const {
        categoryId,
        title,
        city,
        full_address,
        price,
        filled_room,
        empty_room,
        description,
      } = req.body;

      if (req.files.length > 0) {
        const category = await Category.findOne({ _id: categoryId });
        const newItem = {
          categoryId: category._id,
          title,
          city,
          full_address,
          price,
          filled_room,
          empty_room,
          description,
        };

        const item = await Item.create(newItem);

        category.itemId.push({ _id: item._id });

        await category.save();

        for (let i = 0; i < req.files.length; i++) {
          const imageSave = await Image.create({
            imageUrl: `images/${req.files[i].filename}`,
          });

          item.imageId.push({ _id: imageSave._id });

          await item.save();
        }
      }
      req.flash('alertMessage', 'Success Add Item');
      req.flash('alertStatus', 'success');
      res.redirect('/admin/item');
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/admin/item');
    }
  },

  showImageItem: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Item.findOne({ _id: id }).populate({
        path: 'imageId',
        select: 'id imageUrl',
      });

      const alertMessage = req.flash('alertMessage');
      const alertStatus = req.flash('alertStatus');
      const alert = { message: alertMessage, status: alertStatus };

      res.render('admin/item/view_item', {
        title: 'Asrog | Show Image',
        alert,
        item,
        action: 'show image',
      });
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/admin/item');
    }
  },

  showEditItem: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Item.findOne({ _id: id })
        .populate({ path: 'imageId', select: 'id imageUrl' })
        .populate({ path: 'categoryId', select: 'id name' });
      const category = await Category.find();

      const alertMessage = req.flash('alertMessage');
      const alertStatus = req.flash('alertStatus');
      const alert = { message: alertMessage, status: alertStatus };

      res.render('admin/item/view_item', {
        title: 'Asrog | Edit Item',
        alert,
        item,
        category,
        action: 'edit',
      });
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/admin/item');
    }
  },

  editItem: async (req, res) => {
    try {
      const { id } = req.params;
      const {
        categoryId,
        title,
        city,
        full_address,
        price,
        filled_room,
        empty_room,
        description,
      } = req.body;
      const item = await Item.findOne({ _id: id })
        .populate({ path: 'imageId', select: 'id imageUrl' })
        .populate({ path: 'categoryId', select: 'id name' });

      if (req.files.length > 0) {
        console.log(req.files.length);
        for (let i = 0; i < item.imageId.length; i++) {
          const imageUpdate = await Image.findOne({ _id: item.imageId[i]._id });
          await fs.unlink(path.join(`public/${imageUpdate.imageUrl}`));
          imageUpdate.imageUrl = `images/${req.files[i].filename}`;
          await imageUpdate.save();
        }
        item.title = title;
        item.price = price;
        item.city = city;
        item.full_address = full_address;
        item.price = price;
        item.full_address = full_address;
        item.filled_room = filled_room;
        item.empty_room = empty_room;
        item.description = description;
        item.categoryId = categoryId;

        await item.save();
        req.flash('alertMessage', 'Success update Item');
        req.flash('alertStatus', 'success');
        res.redirect('/admin/item');
      } else {
        item.title = title;
        item.price = price;
        item.city = city;
        item.full_address = full_address;
        item.price = price;
        item.full_address = full_address;
        item.filled_room = filled_room;
        item.empty_room = empty_room;
        item.description = description;
        item.categoryId = categoryId;
        await item.save();
        req.flash('alertMessage', 'Success update Item');
        req.flash('alertStatus', 'success');
        res.redirect('/admin/item');
      }
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/admin/item');
    }
  },

  deleteItem: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Item.findOne({ _id: id }).populate('imageId');
      for (let i = 0; i < item.imageId.length; i++) {
        Image.findOne({ _id: item.imageId[i]._id })
          .then((image) => {
            fs.unlink(path.join(`public/${image.imageUrl}`));
            image.remove();
          })
          .catch((error) => {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/item');
          });
      }
      await item.remove();
      req.flash('alertMessage', 'Success delete Item');
      req.flash('alertStatus', 'success');
      res.redirect('/admin/item');
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/admin/item');
    }
  },

  viewDetailItem: async (req, res) => {
    const { itemId } = req.params;
    try {
      const alertMessage = req.flash('alertMessage');
      const alertStatus = req.flash('alertStatus');
      const alert = { message: alertMessage, status: alertStatus };
      const facility = await Facility.find({ itemId: itemId });
      console.log(facility);

      res.render('admin/item/detail_item', {
        title: 'Staycation | Detail Item',
        alert,
        itemId,
        facility,
        // user: req.session.user,
      });
    } catch (error) {
      res.redirect(`/admin/item/detail/${itemId}`);
    }
  },

  addFacilyty: async (req, res) => {
    const { name, qty, itemId } = req.body;

    try {
      if (!req.file) {
        req.flash('alertMessage', 'Image not found');
        req.flash('alertStatus', 'danger');
        res.redirect(`/admin/item/detail/${itemId}`);
      }
      const facility = await Facility.create({
        name,
        qty,
        itemId,
        imageUrl: `images/${req.file.filename}`,
      });

      const item = await Item.findOne({ _id: itemId });
      item.facilityId.push({ _id: facility._id });

      await item.save();
      req.flash('alertMessage', 'Success Add Facility');
      req.flash('alertStatus', 'success');
      res.redirect(`/admin/item/detail/${itemId}`);
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/admin/item/detail');
    }
  },

  viewBank: async (req, res) => {
    try {
      const bank = await Bank.find();
      const alertMessage = req.flash('alertMessage');
      const alertStatus = req.flash('alertStatus');
      const alert = { message: alertMessage, status: alertStatus };
      res.render('admin/bank/view_bank', {
        title: 'Asrog | Bank',
        alert,
        bank,
      });
    } catch (error) {
      res.redirect('/admin/bank');
    }
  },

  addBank: async (req, res) => {
    try {
      const { name, bankName, accountNumber } = req.body;

      await Bank.create({
        name,
        bankName,
        accountNumber,
        imageUrl: `images/${req.file.filename}`,
      });

      req.flash('alertMessage', 'Success Add Bank');
      req.flash('alertStatus', 'success');
      res.redirect('/admin/bank');
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/admin/bank');
    }
  },

  editBank: async (req, res) => {
    try {
      const { id, name, bankName, accountNumber } = req.body;
      const bank = await Bank.findOne({ _id: id });

      if (req.file == undefined) {
        bank.name = name;
        bank.bankName = bankName;
        bank.accountNumber = accountNumber;
        await bank.save();

        req.flash('alertMessage', 'Success Update Bank');
        req.flash('alertStatus', 'success');
        res.redirect('/admin/bank');
      } else {
        await fs.unlink(path.join(`public/${bank.imageUrl}`));
        bank.name = name;
        bank.bankName = bankName;
        bank.accountNumber = accountNumber;
        bank.imageUrl = `images/${req.file.filename}`;
        await bank.save();

        req.flash('alertMessage', 'Success Update Bank');
        req.flash('alertStatus', 'success');
        res.redirect('/admin/bank');
      }
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/admin/bank');
    }
  },

  deleteBank: async (req, res) => {
    try {
      const { id } = req.params;
      const bank = await Bank.findOne({ _id: id });
      await fs.unlink(path.join(`public/${bank.imageUrl}`));
      await bank.remove();
      req.flash('alertMessage', 'Success Delete Bank');
      req.flash('alertStatus', 'success');
      res.redirect('/admin/bank');
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/admin/bank');
    }
  },
};
