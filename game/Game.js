var mongoose = require('mongoose');
var GameSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  Bonus: String
});
mongoose.model('Game', GameSchema);

module.exports = mongoose.model('Game');