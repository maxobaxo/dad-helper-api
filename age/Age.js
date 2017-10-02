var mongoose = require('mongoose');
var AgeSchema = new mongoose.Schema({
  "age-range": String,
});

mongoose.model('Age', AgeSchema);

module.exports = mongoose.model('Age');
