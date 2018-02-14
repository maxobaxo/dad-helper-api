var mongoose = require("mongoose");
var SkillSchema = new mongoose.Schema({
  name: String
});
var Skill = mongoose.model("Skill", SkillSchema);

module.exports = SkillSchema;
