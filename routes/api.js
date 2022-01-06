const router = require('express').Router();
const api = require('../controllers/api');
router.get('/landing-page', api.landingPage);

module.exports = router;
