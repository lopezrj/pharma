const graphql = require('graphql');

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } = graphql;

const FarmacoType = new GraphQLObjectType({
  name: 'Farmaco',
  fields: () => ({
    id: {type: GraphQLID},
    drugbank_id: { type: GraphQLString },
    access_number1: { type: GraphQLString },
    access_number2: { type: GraphQLString },
    type: { type: GraphQLString },
    name: { type: GraphQLString },
    cas_number: { type: GraphQLString },
    unii: { type: GraphQLString },
    state: { type: GraphQLString },
    atc_code: { type: GraphQLString },
    ahfs_code: { type: GraphQLString },
    approved: { type: GraphQLBoolean },
    investigational: { type: GraphQLBoolean },
    withdrawn: { type: GraphQLBoolean },
    description: { type: GraphQLString },
    indication: { type: GraphQLString },
  })
});

module.exports = FarmacoType;