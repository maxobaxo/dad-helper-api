var express = require("express");
var app = express();
var db = require("./db");
var bodyParser = require("body-parser");
var { graphqlExpress } = require("apollo-server-express");
var { buildSchema } = require("graphql");

// construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// the root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello World!";
  }
};

// bodyParser is needed just for POST.
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({ schema: schema, rootValue: root })
);

var GameController = require("./game/GameController");
app.use("/games", GameController);
var SkillController = require("./skill/SkillController");
app.use("/skills", SkillController);
var AgeController = require("./age/AgeController");
app.use("/ages", AgeController);

module.exports = app;
