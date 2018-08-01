var axios = require('axios');
var cheerio = require('cheerio');
var SocialConst = require('../const/social');

var github = {

  /**
   * Get github profile
   * 
   * @param {String} profile
   */
  getProfile: async (profile) => {

    var response = await axios.get(SocialConst.SOCIAL_URL + profile);
    var $ = cheerio.load(response.data);
    if (response.status === 200) {
    
      var imageUrl = $('.u-photo img.avatar').attr('src');
      var username = profile;
      var fullName = $('.vcard-names .vcard-fullname').text();
      var followers = +$('.UnderlineNav-body a[title="Followers"] .Counter').text();
      var following = +$('.UnderlineNav-body a[title="Following"] .Counter').text();
    
      return {
        username,
        fullName,
        imageUrl,
        followers,
        following
      }
    }
    
  }
}

module.exports = github;