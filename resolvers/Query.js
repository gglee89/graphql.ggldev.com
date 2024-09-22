exports.Query = {
  courses: (parent, args, context) => {
    let filteredCourses = context.courses;
    const { filter } = args;

    if (filter && filter.discount) {
      filteredCourses = filteredCourses.filter((course) => course.discount);
    }

    return filteredCourses;
  },
  course: (parent, args, context) => {
    const courseId = args.id;
    const courses = context.courses;
    const course = courses.find((course) => course.id === courseId);
    if (!course) return null;
    return course;
  },
  genres: (parent, args, context) => context.genres,
  genre: (parent, args, context) => {
    const genres = context.genres;
    const catId = args.catId;
    const genre = genres.find((genre) => genre.id === catId);
    if (!genre) return null;
    return genre;
  },
};
