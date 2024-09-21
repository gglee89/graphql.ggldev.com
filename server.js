const { ApolloServer, gql } = require("apollo-server");

const allCourses = [
  {
    id: "book-06",
    name: "TypeScript Basics",
    description: "Typescript Basics for beginners",
    price: 599.99,
    discount: false,
  },
  {
    id: "book-07",
    name: "GraphQL Basics",
    description: "GraphQL Basics for beginners",
    price: 499.99,
    discount: true,
  },
  {
    id: "book-08",
    name: "NextJS Basics",
    description: "NextJS Basics for beginners",
    price: 599.99,
    discount: false,
  },
];

const typeDefs = gql`
  type Query {
    welcome: String!
    numOfCourses: Int
    courses: [Course!]!
    course(id: ID!): Course
    price: Float
    isTrainer: Boolean
  }

  type Course {
    name: String!
    description: String!
    price: Float!
    discount: Boolean!
  }
`;

const resolvers = {
  Query: {
    welcome: () => {
      return "Welcome to the World of GraphQL";
    },
    numOfCourses: () => {
      return 12;
    },
    courses: () => allCourses,
    course: (parent, args, context) => {
      const courseId = args.id;
      const course = allCourses.find((course) => course.id === courseId);
      if (!course) return null;
      return course;
    },
    price: () => {
      return 1465.98;
    },
    isTrainer: () => {
      return true;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Server is running at ${url}`));
