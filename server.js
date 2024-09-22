const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { courses, genres, reviews } = require("./database");
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
    reviews,
  },
});
server.listen().then(({ url }) => console.log(`Server is running at ${url}`));
