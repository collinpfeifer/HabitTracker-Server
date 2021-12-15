const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./graphql/typeDefs');
const { resolvers } = require('./graphql/resolvers/tasks');
const { db } = require('./database/db.ts');

const port = process.env.PORT || 5000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { db },
});

server.listen({ port }).then(() => {
  console.log(`🚀  Server ready at ${port}`);
});

export {};
