const { GraphQLString } =  require('graphql');
const farmacoGraphQLType = require('../types/farmacoType');
const Farmaco = require('../../models/farmaco');

module.exports = {
  type: farmacoGraphQLType,
  args: { name: { type: GraphQLString }},
  resolve(parent, args) {
    return Farmaco({name: args.name})
  }
};