const {GraphQLObjectType} = require('graphql');

//const Farmaco = require('../../models/farmaco');
const queryAllFarmacos = require('./queryAllFarmacos');
const queryPageFarmacos = require('./queryPageFarmacos');
const queryCountFarmacos = require('./queryCountFarmacos');
const queryFarmacoById = require('./queryFarmacoById');
const queryFarmacoByName = require('./queryFarmacoByName');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      queryCountFarmacos,
      queryPageFarmacos,
      queryAllFarmacos,
      queryFarmacoByName,
      queryFarmacoById,
    }
  })

module.exports = RootQuery;