const { GraphQLString } =  require('graphql');
const farmacoGraphQLType = require('../types/farmacoType');
const Farmaco = require('../../models/farmaco');

module.exports = {
  type: farmacoGraphQLType,
  args: { common_name: { type: GraphQLString }},
  resolve(parent, args) {
    return Farmaco({common_name: args.common_name})
  }
};