const { GraphQLList, GraphQLInt, GraphQLString } =  require('graphql');
const farmacoGraphQLType = require('../types/farmacoType');
const Farmaco = require('../../models/farmaco');

module.exports = {
  type: new GraphQLList(farmacoGraphQLType),
  args: {first: { type: GraphQLInt } , limit: { type: GraphQLInt } },
  resolve(parent,args) {
    return Farmaco.find({}).sort({atc_code: 1}).skip(args.first).limit(args.limit)
  }
}