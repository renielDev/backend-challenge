var express = require('express');
var router = express.Router();
var UserProfile = require('../controllers/UserProfileController');
var UserProfileContinue = require('../controllers/UserProfileContinueController');

/* GET users profile */
router.get('/user_profile/:user_profile', UserProfile);
router.get('/user_profile_continue/:user_profile', UserProfileContinue);

module.exports = router;
