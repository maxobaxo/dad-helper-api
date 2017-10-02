var express = require('express');
var app = express();
var db = require('./db');

var GameController = require('./game/GameController');
app.use('/games', GameController);
var SkillController = require('./skill/SkillController');
app.use('/skills', SkillController);

module.exports = app;
