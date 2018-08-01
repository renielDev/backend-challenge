var express = require('express');
var router = express.Router();
var UserProfile = require('../controllers/UserProfileController');

/* GET users profile */
router.get('/user_profile/:user_profile', UserProfile);

module.exports = router;
