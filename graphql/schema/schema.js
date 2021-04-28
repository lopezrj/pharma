const {GraphQLSchema} = require('graphql');

const RootQuery = require('../resolvers/rootQuery');

module.exports = new GraphQLSchema({
  query: RootQuery
});
