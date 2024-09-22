exports.Course = {
  genre: (parent, args, context) => {
    const genres = context.genres;
    const genreId = parent.genreId;
    return genres.find((genre) => genre.id === genreId);
  },
  reviews: (parent, args, context) => {
    const reviews = context.reviews;
    const { id } = parent;
    return reviews.filter((review) => review.courseId === id);
  },
};
