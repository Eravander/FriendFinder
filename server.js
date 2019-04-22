//Requires
var express = require("express");
var path = require("path");

//app and PORT
var app = express();
var PORT = process.env.PORT || 8080;

//Data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
require('./app/routing/apiRoutes')(app); 
require('./app/routing/htmlRoutes')(app);

//HEY! LISTEN!
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
