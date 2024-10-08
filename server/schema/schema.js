const { gql } = require("apollo-server");
const { projects, clients } = require("../dummyData");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
} = require("graphql");

exports.typeDefs = gql`
  type Query {
    courses(filter: CoursesFilter): [Course!]!
    course(id: ID!): Course
    genres: [Genre!]!
    genre(catId: ID!): Genre
    reviews: [Review!]!
    numOfCourses: Int
  }
  input CoursesFilter {
    discount: Boolean
    avgRating: Int
  }

  type Course {
    id: ID!
    name: String!
    description: String!
    price: Float!
    discount: Boolean!
    genre: Genre
    reviews: [Review!]!
  }

  type Genre {
    id: ID!
    name: String!
    courses(filter: CoursesFilter): [Course!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

  type Mutation {
    addGenre(input: AddGenreInput!): Genre!
    addCourse(input: AddCourseInput!): Course!
    addReview(input: AddReviewInput!): Review!
    deleteGenre(id: ID!): Boolean!
    deleteCourse(id: ID!): Boolean!
    deleteReview(id: ID!): Boolean!
    updateGenre(id: ID!, input: UpdateGenreInput!): Genre!
    updateCourse(id: ID!, input: UpdateCourseInput!): Course!
    updateReview(id: ID!, input: UpdateReviewInput!): Review!
  }

  input AddGenreInput {
    name: String!
  }

  input AddCourseInput {
    name: String!
    description: String!
    price: Float!
    discount: Boolean!
    genreId: ID!
  }

  input AddReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    courseId: ID!
  }

  input UpdateGenreInput {
    name: String!
  }
  input UpdateCourseInput {
    name: String!
    description: String!
    price: Float!
    discount: Boolean!
    genreId: ID!
  }
  input UpdateReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    courseId: ID!
  }
`;
