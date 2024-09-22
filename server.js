const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { db } = require("./database");
const { Query } = require("./resolvers/Query");
const { Course } = require("./resolvers/Course");
const { Genre } = require("./resolvers/Genre");
const { Mutation } = require("./resolvers/Mutation");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Genre,
    Course,
  },
  context: { db },
});
server.listen().then(({ url }) => console.log(`Server is running at ${url}`));
