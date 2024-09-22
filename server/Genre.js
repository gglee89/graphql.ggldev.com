exports.Genre = {
  courses: (parent, args, context) => {
    const db = context.db;

    const genreId = parent.id;
    const { filter } = args;
    const genreCourses = db.courses.filter(
      (course) => course.genreId === genreId
    );

    let filteredGenreCourses = genreCourses;

    if (filter) {
      const { discount, avgRating } = filter;
      if (filter.discount)
        filteredGenreCourses = filteredGenreCourses.filter(
          (course) => course.discount
        );
      if ([1, 2, 3, 4, 5].includes(avgRating))
        filteredGenreCourses = filteredGenreCourses.filter((course) => {
          let sum = 0;
          let numOfReviews = 0;
          reviews.forEach((review) => {
            if (review.courseId === course.id) {
              sum += review.rating;
              numOfReviews++;
            }
          });
          const avgCourseRating = sum / numOfReviews;
          return avgCourseRating >= avgRating;
        });
    }

    return filteredGenreCourses;
  },
};
