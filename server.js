const { ApolloServer, gql } = require("apollo-server");

const genres = [
  { id: "cat-01", name: "Technical" },
  { id: "cat-02", name: "History" },
];

const allCourses = [
  {
    id: "book-06",
    name: "TypeScript Basics",
    description: "Typescript Basics for beginners",
    price: 599.99,
    discount: false,
    genreId: "cat-01",
  },
  {
    id: "book-07",
    name: "GraphQL Basics",
    description: "GraphQL Basics for beginners",
    price: 499.99,
    discount: true,
    genreId: "cat-01",
  },
  {
    id: "book-08",
    name: "NextJS Basics",
    description: "NextJS Basics for beginners",
    price: 599.99,
    discount: false,
    genreId: "cat-01",
  },
  {
    id: "book-21",
    name: "The Immortals of Meluha",
    description: "Shiva Trilogy -1",
    price: 299.99,
    discount: false,
    genreId: "cat-02",
  },
  {
    id: "book-22",
    name: "The Secret of the Nagas",
    description: "Shiva Trilogy -2",
    price: 199.99,
    discount: true,
    genreId: "cat-02",
  },
  {
    id: "book-23",
    name: "The Oath of the Vayaputras",
    description: "Shiva Trilogy -3",
    price: 599.99,
    discount: false,
    genreId: "cat-02",
  },
];

const typeDefs = gql`
  type Query {
    welcome: String!
    numOfCourses: Int
    courses: [Course!]!
    course(id: ID!): Course
    genres: [Genre!]!
    genre(catId: ID!): Genre
    price: Float
    isTrainer: Boolean
  }

  type Course {
    name: String!
    description: String!
    price: Float!
    discount: Boolean!
    genreId: ID!
  }

  type Genre {
    id: ID!
    name: String!
    courses: [Course!]!
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
    genres: () => genres,
    genre: (parent, args, context) => {
      const catId = args.catId;
      const genre = genres.find((genre) => genre.id === catId);
      if (!genre) return null;
      return genre;
    },
    price: () => {
      return 1465.98;
    },
    isTrainer: () => {
      return true;
    },
  },
  Genre: {
    courses: (parent, args, context) => {
      const genreId = parent.id; // why parent?
      return allCourses.filter((course) => course.genreId === genreId);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Server is running at ${url}`));
