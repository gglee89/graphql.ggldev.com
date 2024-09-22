exports.Genre = {
  courses: (parent, args, context) => {
    const courses = context.courses;
    const genreId = parent.id;
    const { filter } = args;
    const genreCourses = courses.filter((course) => course.genreId === genreId);

    let filteredGenreCourses = genreCourses;
    if (filter && filter.discount) {
      filteredGenreCourses = filteredGenreCourses.filter(
        (course) => course.discount
      );
    }

    return filteredGenreCourses;
  },
};
