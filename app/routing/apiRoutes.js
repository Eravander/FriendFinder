//Require friends.js file
var friends = require("../data/friends.js");

module.exports = function (app) {
  //a GET route that displays JSON of all possible friends
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    //grabs the new friend's scores to compare with friends in friends array
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var bestMatch = 0;

    //runs through all current friends in list
    friends.forEach(function (player) {
      var totalDifference = 0;
      //run through scores to compare friends
      newFriendScores.forEach(function (scores) {
        totalDifference += (Math.abs(parseInt(player.scores) - parseInt(scores)));
      });

      //push results into scoresArray
      scoresArray.push(totalDifference);
    });

    //after all friends are compared, find best match
    scoresArray.forEach(function (match) {
      if (match <= match[bestMatch]) {
        bestMatch = match;
      }
    });

    //return bestMatch data
    var bff = friends[bestMatch];
    res.json(bff);

    //pushes new submission into the friendsList array
    friends.push(req.body);
  });
};