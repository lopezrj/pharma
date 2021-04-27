const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const FarmacoType = new GraphQLObjectType({
  name: 'Farmaco',
  fields: () => ({
    drug_bank_id: { type: GraphQLString },
    common_name: { type: GraphQLString },
    cas: { type: GraphQLString },
    unii: { type: GraphQLString },
    standard_inchi_key: { type: GraphQLString }
  })
});

module.exports = FarmacoType;