var mongoose = require("mongoose");
var AgeSchema = new mongoose.Schema({
  range: String,
  skillIds: Array
});

var Age = mongoose.model("Age", AgeSchema);

module.exports = AgeSchema;
