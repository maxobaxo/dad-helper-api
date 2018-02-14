var SkillSchema = require("../skill/Skill");
var createType = require("mongoose-schema-to-graphql");
var { printType } = require("graphql");

const config = {
  name: "Skill", //graphQL type's name
  description: "Skill base schema", //graphQL type's description
  class: "GraphQLObjectType", //"definitions" class name
  schema: SkillSchema, //your Mongoose schema "let couponSchema = mongoose.Schema({...})"
  exclude: ["_id"] //fields which you want to exclude from mongoose schema
};

var skillType = () => [
  printType(createType(config)),
  // `
  //   extend type Skill {
  //     name: String
  //   }
  // `
];

module.exports = skillType;
