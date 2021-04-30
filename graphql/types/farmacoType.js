const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const FarmacoType = new GraphQLObjectType({
  name: 'Farmaco',
  fields: () => ({
    drugbank_id: { type: GraphQLString },
    type: { type: GraphQLString },
    name: { type: GraphQLString },
    cas_number: { type: GraphQLString },
    unii: { type: GraphQLString },
    state: { type: GraphQLString },
    atc_code: { type: GraphQLString },
  })
});

module.exports = FarmacoType;