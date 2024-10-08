const { v4: uuid } = require("uuid");

exports.Mutation = {
  addGenre: (parent, args, context) => {
    const db = context.db;
    const { input } = args;
    const { name } = input;
    const newGenre = {
      id: uuid(),
      name,
    };
    db.genres.push(newGenre);
    return newGenre;
  },
  addCourse: (parent, args, context) => {
    const db = context.db;
    const { input } = args;

    const newCourse = {
      id: uuid(),
      ...input,
    };
    db.courses.push(newCourse);
    return newCourse;
  },
  addReview: (parent, args, context) => {
    const db = context.db;
    const { input } = args;

    const newReview = {
      id: uuid(),
      ...input,
    };
    db.reviews.push(newReview);
    return newReview;
  },
  deleteGenre: (parent, { id }, { db }) => {
    db.genres = db.genres.filter((genre) => genre.id !== id);
    db.courses = db.courses.map((course) => {
      if (course.genreId === id) {
        return { ...course, genreId: null };
      } else {
        return course;
      }
    });
    return true;
  },
  deleteCourse: (parent, { id }, { db }) => {
    db.courses = db.courses.filter((course) => course.id !== id);
    db.reviews = db.reviews.map((review) => {
      if (review.courseId === id) {
        return { ...review, courseId: null };
      } else {
        return review;
      }
    });
    return true;
  },
  deleteReview: (parent, { id }, { db }) => {
    db.reviews = db.reviews.filter((review) => review.id !== id);
    return true;
  },
  updateGenre: (parent, { id, input }, { db }) => {
    const index = db.genres.findIndex((genre) => genre.id === id);
    db.genres[index] = { ...db.genres[index], ...input };
    return db.genres[index];
  },
  updateCourse: (parent, { id, input }, { db }) => {
    const index = db.courses.findIndex((course) => course.id === id);
    db.courses[index] = { ...db.courses[index], ...input };
    return db.courses[index];
  },
  updateReview: (parent, { id, input }, { db }) => {
    const index = db.reviews.findIndex((review) => review.id === id);
    db.reviews[index] = { ...db.reviews[index], ...input };
    return db.reviews[index];
  },
};
