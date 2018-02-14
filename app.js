const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let db = require("./db");
let schema = require("./graphql/graphqlSchema");

const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { find, filter } = require("lodash");
var cors = require("cors");

app.use(cors());

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

app.use("/graphiql", graphiqlExpress({ endpointUrl: "/graphql" }));

// var GameController = require("./game/GameController");
// app.use("/games", GameController);
// var SkillController = require("./skill/SkillController");
// app.use("/skills", SkillController);
// var AgeController = require("./age/AgeController");
// app.use("/ages", AgeController);

module.exports = app;
