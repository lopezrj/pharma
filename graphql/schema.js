const { GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql');
const farmacoGraphQLType =  require('./farmacoType');
const Farmaco = require('../models/farmaco');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      farmaco: {
        type: farmacoGraphQLType,
        args: { id: { type: GraphQLString }},
        resolve(parent, args) {
          return Farmaco.findById(<a href="http://args.id" class="link link-url" target="_blank" rel="external nofollow noopener noreferrer">args.id</a>)
        }
      } 
    }
  })

module.exports = new GraphQLSchema({
    query: RootQuery
});
