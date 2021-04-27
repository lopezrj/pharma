const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const FarmacoType = new GraphQLObjectType({
  name: 'Farmaco',
  fields: () => ({
    drugBankID: { type: GraphQLString },
    commonName: { type: GraphQLString },
    cas: { type: GraphQLString },
    unii: { type: GraphQLString }
  })
});

module.exports = FarmacoType;