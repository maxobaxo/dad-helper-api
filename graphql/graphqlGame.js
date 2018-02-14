var GameSchema = require("../game/Game");
var createType = require("mongoose-schema-to-graphql");
var { printType } = require("graphql");

const config = {
  name: "Game", //graphQL type's name
  description: "Game base schema", //graphQL type's description
  class: "GraphQLObjectType", //"definitions" class name
  schema: GameSchema, //your Mongoose schema "let couponSchema = mongoose.Schema({...})"
  exclude: ["_id"] //fields which you want to exclude from mongoose schema
};

var gameType = () => [
  printType(createType(config)),
  // `
  //   extend type Game {
  //     name: String
  //     description: String
  //     bonus: String
  //   }
  // `
];

module.exports = gameType;
