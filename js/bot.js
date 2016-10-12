console.log("The bot thing is working!");
var apiKey = require('./../.env').apiKey;
var Twit = require('twit');

var twitBot = new Twit(apiKey);

var parameters = {
  q: '#wework',
  count: 3,
  lang: 'en',
  geocode: "39.965876,-75.139439,5mi"
}

twitBot.get('search/tweets', parameters, gotData);

function gotData(err, data, response) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
}
