const { GraphQLInt } =  require('graphql');
const Farmaco = require('../../models/farmaco');

module.exports = {
  type: GraphQLInt,
  args: { },
  resolve() {
    return Farmaco.find({}).countDocuments()
  }
}