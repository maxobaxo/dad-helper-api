var AgeSchema = require("../age/Age");
var createType = require("mongoose-schema-to-graphql");
var { printType } = require("graphql");

const config = {
  name: "Age", //graphQL type's name
  description: "Age base schema", //graphQL type's description
  class: "GraphQLObjectType", //"definitions" class name
  schema: AgeSchema, //your Mongoose schema "let couponSchema = mongoose.Schema({...})"
  exclude: ["_id"] //fields which you want to exclude from mongoose schema
};

var ageType = () => [
  printType(createType(config)),
  // `
  //   extend type Age {
  //     range: String
  //   }
  // `
];

module.exports = ageType;
