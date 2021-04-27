const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const FarmacoType = new GraphQLObjectType({
  name: 'Farmaco',
  fields: () => ({
    DrugBank: { type: GraphQLString },
    Commonname: { type: GraphQLString },
    CAS: { type: GraphQLString },
    UNII: { type: GraphQLString }
  })
});

module.exports = FarmacoType;