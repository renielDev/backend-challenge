var createError = require('http-errors');
var github = require('../helpers/github');
var kue = require('kue'),
  queue = kue.createQueue();
var CronConst = require('../const/cron');

var UserProfileContinueController = async (req, res, next) => {
  
  try {
    var data = await github.getProfile(req.params.user_profile);
    
    // Create 10 jobs that will run 2 minutes after the other
    for (attempt = 1; attempt <= 10; attempt++) {
      var job = queue.createJob(CronConst.GET_PROFILE, {
        'user_profile' : req.params.user_profile
      })
      .delay(120000 * attempt)
      .attempts(3)
      .save();
    }

    res.json({ data })
  } catch (err) {
    next(createError(404))
  }
  
}

module.exports = UserProfileContinueController;