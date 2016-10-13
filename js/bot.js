console.log("The bot thing is working!");
var apiKey = require('./../.env').apiKey;
var Twit = require('twit');

var twitBot = new Twit(apiKey);

// var parameters = {
//   q: 'from:Epicodus',
//   count: 5,
//   lang: 'en',
//   //geocode: "39.965876,-75.139439,5000mi"
// }
//
// twitBot.get('search/tweets', parameters, gotData);
//
// function gotData(err, data, response) {
//   var tweets = data.statuses;
//   for (var i = 0; i < tweets.length; i++) {
//     console.log(tweets[i].text);
//   }
// }

var Philly = ['-75.148747', '39.958012', '-75.136237', '39.968899']

var stream = twitBot.stream('statuses/filter', { locations: Philly })

stream.on('tweet', function (tweet) {
  console.log(tweet.user.name + "@" + tweet.user.screen_name + ": " + tweet.text)
})
