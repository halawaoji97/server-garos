const router = require('express').Router();
const api = require('../controllers/api');
const { uploadSingle } = require('../middlewares/multer');

router.get('/landing-page', api.landingPage);
router.get('/detail-page/:id', api.detailPage);
router.post('/booking-page', uploadSingle, api.bookingPage);
module.exports = router;
