const { GraphQLInt } =  require('graphql');
const farmacoGraphQLType = require('../types/farmacoType');
const Farmaco = require('../../models/farmaco');

module.exports = {
  type: GraphQLInt,
  args: { },
  resolve() {
    return Farmaco.find({}).countDocuments()
  }
}