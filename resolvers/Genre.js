exports.Genre = {
  courses: (parent, args, context) => {
    const genreId = parent.id; // why parent?
    return courses.filter((course) => course.genreId === genreId);
  },
};
