const {GraphQLObjectType} = require('graphql');

const Farmaco = require('../../models/farmaco');
const queryAllFarmacos = require('./queryAllFarmacos');
const queryFarmacoById = require('./queryFarmacoById');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      queryFarmacoById,
      queryAllFarmacos,
    }
  })

module.exports = RootQuery;