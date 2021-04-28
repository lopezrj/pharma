const { GraphQLList } =  require('graphql');
const farmacoGraphQLType = require('../types/farmacoType');
const Farmaco = require('../../models/farmaco');

module.exports = {
  type: new GraphQLList(farmacoGraphQLType),
  args: {},
  resolve() {
    return Farmaco.find({}).limit(20)
  }
}