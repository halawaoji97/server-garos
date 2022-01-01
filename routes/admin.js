const router = require('express').Router();
const adminController = require('../controllers/admin');
const isLogin = require('../middlewares/auth');
const { uploadSingle, uploadMultiple } = require('../middlewares/multer');

// SIGNIN
router.get('/signin', adminController.viewSignin);
router.post('/signin', adminController.actionSignin);
router.use(isLogin);
router.get('/logout', adminController.actionLogout);

// DASHBOARD
router.get('/dashboard', adminController.viewDashboard);

// ENDPOINT CATEGORY
router.get('/category', adminController.viewCategory);
router.post('/category', adminController.addCategory);
router.put('/category', adminController.editCategory);
router.delete('/category/:id', adminController.deleteCategory);

// ENDPOINT ITEM
router.get('/item', adminController.viewItem);
router.post('/item', uploadMultiple, adminController.addItem);
router.get('/item/show-image/:id', adminController.showImageItem);
router.get('/item/:id', adminController.showEditItem);
router.put('/item/:id', uploadMultiple, adminController.editItem);
router.delete('/item/:id/delete', adminController.deleteItem);

// ENDPOINT DETAIL ITEM
router.get('/item/detail/:itemId', adminController.viewDetailItem);
router.post('/item/add/facility', uploadSingle, adminController.addFacilyty);

// ENDPOINT BANK
router.get('/bank', adminController.viewBank);
router.post('/bank', uploadSingle, adminController.addBank);
router.put('/bank', uploadSingle, adminController.editBank);
router.delete('/bank/:id', adminController.deleteBank);

// ENDPOINT BOOKING
router.get('/booking', adminController.viewBooking);
router.get('/booking/:id', adminController.showDetailBooking);
router.put('/booking/:id/confirmation', adminController.actionConfirmation);
router.put('/booking/:id/reject', adminController.actionReject);

module.exports = router;
