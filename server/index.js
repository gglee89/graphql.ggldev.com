const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 5000;
const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { db } = require("./database");
const { Query } = require("./resolvers/Query");
const { Course } = require("./resolvers/Course");
const { Genre } = require("./resolvers/Genre");
const { Mutation } = require("./resolvers/Mutation");

const app = express();
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// const server = new ApolloServer({
//   typeDefs,
//   resolvers: {
//     Query,
//     Mutation,
//     Genre,
//     Course,
//   },
//   context: { db },
// });
// server.listen().then(({ url }) => console.log(`Server is running at ${url}`));
