var express = require('express');
var app = express();
var db = require('./db');

var GameController = require('./game/GameController');
app.use('/games', GameController);

module.exports = app;
