const Category = require('../models/Category');
const Item = require('../models/Item');
const Image = require('../models/Image');
const path = require('path');

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
};
