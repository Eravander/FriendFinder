//Dependencies
var path = require('path');


//Export
module.exports = function(app){
  //default GET route that leads to the survey page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });
  //catch all route that leads home
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};