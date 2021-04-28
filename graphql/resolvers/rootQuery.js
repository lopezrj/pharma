const {GraphQLObjectType} = require('graphql');

//const Farmaco = require('../../models/farmaco');
const queryAllFarmacos = require('./queryAllFarmacos');
const queryFarmacoById = require('./queryFarmacoById');
const queryFarmacoByName = require('./queryFarmacoByName');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      queryFarmacoByName,
      queryFarmacoById,
      queryAllFarmacos,
    }
  })

module.exports = RootQuery;