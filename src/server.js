require("dotenv").config();

const http = require("http");
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require('@apollo/server/standalone');

const app = require("./app");
const { typeDefs, resolvers } = require("./graphql");

const PORT = process.env.PORT || 4000;

async function startServer() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const { url } = await startStandaloneServer(apolloServer, {
    listen: { port: PORT },
  });

}

startServer().catch((error) => {
  console.error("❌ Server startup failed:");
  console.error(error);
  process.exit(1);
});