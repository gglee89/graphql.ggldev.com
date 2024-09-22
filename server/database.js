const genres = [
  { id: "cat-01", name: "Technical" },
  { id: "cat-02", name: "History" },
];

const courses = [
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

const reviews = [
  {
    id: "rev-01",
    date: "2021-01-01",
    title: "This is bad",
    comment: "when i bought this it broke the computer",
    rating: 1,
    courseId: "book-06",
  },
  {
    id: "rev-02",
    date: "2021-01-01",
    title: "This is terrible",
    comment: "worst ever course",
    rating: 1,
    courseId: "book-07",
  },
  {
    id: "rev-03",
    date: "2021-01-01",
    title: "Kind of okay",
    comment: "okay, but i dont recommend it",
    rating: 3,
    courseId: "book-07",
  },
];

exports.db = { courses, genres, reviews };
