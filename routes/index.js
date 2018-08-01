var express = require('express');
var router = express.Router();
var Users = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/', Users);

module.exports = router;
