var mongoose = require('mongoose');
var GameSchema = new mongoose.Schema({
  name: String,
  description: String,
  Bonus: String
});
mongoose.model('Game', GameSchema);

module.exports = mongoose.model('Game');
