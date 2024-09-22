exports.Course = {
  genre: (parent, args, context) => {
    const genreId = parent.genreId;
    return genres.find((genre) => genre.id === genreId);
  },
};
