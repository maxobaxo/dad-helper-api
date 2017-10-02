var mongoose = require('mongoose');
var SkillSchema = new mongoose.Schema({
  id: String,
  name: String,
});
mongoose.model('Skill', SkillSchema);

module.exports = mongoose.model('Skill');
