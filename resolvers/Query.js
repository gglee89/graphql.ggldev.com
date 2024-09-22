const { courses, genres } = require("../database");

exports.Query = {
  numOfCourses: () => {
    return 12;
  },
  courses: () => courses,
  course: (parent, args, context) => {
    const courseId = args.id;
    const course = courses.find((course) => course.id === courseId);
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
};
