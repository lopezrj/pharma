const { GraphQLString, GraphQLList } =  require('graphql');
const farmacoGraphQLType = require('../types/farmacoType');
const Farmaco = require('../../models/farmaco');

module.exports = {
  type: new GraphQLList(farmacoGraphQLType),
  args: {},
  resolve(parent,args) {
    return Farmaco.find({approved: true}).sort({atc_code: -1 })
  }
}
