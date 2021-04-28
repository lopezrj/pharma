const {GraphQLSchema} = require('graphql');

const RootQuery = require('../resolvers/index.js');

module.exports = new GraphQLSchema({
  query: RootQuery
});
