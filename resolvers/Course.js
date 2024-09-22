exports.Course = {
  genre: (parent, args, context) => {
    const db = context.db;
    const genreId = parent.genreId;
    return db.genres.find((genre) => genre.id === genreId);
  },
  reviews: (parent, args, context) => {
    const db = context.db;
    const { id } = parent;
    return db.reviews.filter((review) => review.courseId === id);
  },
};
