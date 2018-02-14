const { makeExecutableSchema } = require("graphql-tools");
const ageType = require("./graphqlAge");
const skillType = require("./graphqlSkill");
const gameType = require("./graphqlGame");

const typeDefs = [ageType, skillType, gameType];

const resolvers = {
  Query: {
    games: () => games,
    ages: () => ages,
    age: (_, { id }) => find(skills, { ageId: range }),
    skills: (_, { ageId }) => filter(skills, { ageId: ageId }),
    game: (_, { skillId }) => find(games, { skillId: skillId })
  }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
