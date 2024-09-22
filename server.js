const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { courses, genres } = require("./database");
const { Query } = require("./resolvers/Query");
const { Course } = require("./resolvers/Course");
const { Genre } = require("./resolvers/Genre");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Genre,
    Course,
  },
  context: {
    courses,
    genres,
  },
});
server.listen().then(({ url }) => console.log(`Server is running at ${url}`));
