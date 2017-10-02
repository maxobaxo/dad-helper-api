var express = require('express');
var app = express();
var db = require('./db');

var GameController = require('./game/GameController');
app.use('/users', GameController);
var SkillController = require('./skill/SkillController');
app.use('/skills', SkillController);
var AgeController = require('./age/AgeController');
app.use('/ages', AgeController);

module.exports = app;
