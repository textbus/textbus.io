const gulp = require('gulp');

gulp.task('copy', function () {
  gulp.src('./node_modules/@textbus/editor/bundles/textbus.min.css').pipe(gulp.dest('./dist/lib'));
  return gulp.src('./node_modules/@textbus/editor/bundles/textbus.min.js').pipe(gulp.dest('./dist/lib'));
});

gulp.task('default', gulp.series('copy'));
