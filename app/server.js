// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
var express = require('express');
var bodyParser = require('body-parser');

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port.
var PORT = process.env.PORT || 8080;

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));
 
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));

// points our server to a series of "route" files. (left off /app)
require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  