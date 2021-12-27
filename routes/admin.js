const router = require('express').Router();
const adminController = require('../controllers/admin');
const { uploadSingle, uploadMultiple } = require('../middlewares/multer');

router.get('/dashboard', adminController.viewDashboard);

// ENDPOINT CATEGORY
router.get('/category', adminController.viewCategory);
router.post('/category', adminController.addCategory);
router.put('/category', adminController.editCategory);
router.delete('/category/:id', adminController.deleteCategory);

// ENDPOINT ITEM
router.get('/item', adminController.viewItem);
router.post('/item', uploadMultiple, adminController.addItem);

module.exports = router;
