const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/signin', userController.signin);
router.post('/signup', userController.signup);

module.exports = router;
