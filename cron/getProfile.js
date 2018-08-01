var cron = require('node-cron');
var kue = require('kue'),
  queue = kue.createQueue();
var github = require('../helpers/github');
var CronConst = require('../const/cron');

cron.schedule('*/10 * * * * *', async () => {
  queue.process(CronConst.GET_PROFILE, async (jobs, done) => {
    var data = await github.getProfile(jobs.data.user_profile);
    console.log('After 2 minutes ...',  { data });
  });
});