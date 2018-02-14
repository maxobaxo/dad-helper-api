var mongoose = require("mongoose");
var GameSchema = new mongoose.Schema({
  name: String,
  description: String,
  bonus: String
});
var Game = mongoose.model("Game", GameSchema);

module.exports = GameSchema;
