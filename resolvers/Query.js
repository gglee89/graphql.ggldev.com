exports.Query = {
  courses: (parent, args, context) => {
    const db = context.db;

    let filteredCourses = db.courses;
    const { filter } = args;

    if (filter) {
      const { discount, avgRating } = filter;

      if (discount)
        filteredCourses = filteredCourses.filter((course) => course.discount);
      if ([1, 2, 3, 4, 5].includes(avgRating))
        filteredCourses = filteredCourses.filter((course) => {
          let sum = 0;
          let numOfReviews = 0;
          db.reviews.forEach((review) => {
            if (review.courseId === course.id) {
              sum += review.rating;
              numOfReviews++;
            }
          });
          const avgCourseRating = sum / numOfReviews;
          return avgCourseRating >= avgRating;
        });
    }

    return filteredCourses;
  },
  course: (parent, args, context) => {
    const db = context.db;
    const courseId = args.id;
    const course = db.courses.find((course) => course.id === courseId);
    if (!course) return null;
    return course;
  },
  genres: (parent, args, context) => context.db.genres,
  genre: (parent, args, context) => {
    const db = context.db;
    const catId = args.catId;
    const genre = db.genres.find((genre) => genre.id === catId);
    if (!genre) return null;
    return genre;
  },
};
