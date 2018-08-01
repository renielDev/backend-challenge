var createError = require('http-errors');
var github = require('../helpers/github');

var UserProfileController = async (req, res, next) => {
  
  try {
    var data = await github.getProfile(req.params.user_profile);

    res.send({ data });
  } catch (err) {
    next(createError(404))
  }
  
}

module.exports = UserProfileController;