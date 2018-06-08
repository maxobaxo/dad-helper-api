var express = require("express");
var app = express();
var db = require("./db");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

var GameController = require("./game/GameController");
app.use("/games", GameController);
var SkillController = require("./skill/SkillController");
app.use("/skills", SkillController);
var AgeController = require("./age/AgeController");
app.use("/ages", AgeController);

var KeyController = require("./key/KeyController");
app.use(
  "/.well-known/acme-challenge/7mxzfew8KAwtK1nfZv8p-iRgyDYpwsq9E4ZSsAeunUg",
  KeyController
);

module.exports = app;
