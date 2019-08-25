var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/spangalang");

const { apiRoutes } = require('./routes/index');
app.use('/api-v1', apiRoutes);






app.listen(port, () => {
    console.log("Server listening on port " + port);
});