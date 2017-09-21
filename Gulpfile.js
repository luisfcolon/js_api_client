const gulp = require('gulp');
const babel = require('gulp-babel');
const uglifyjs = require('gulp-uglifyjs');

gulp.task('default', () => {
  return gulp.src('src/index.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglifyjs())
    .pipe(gulp.dest('dist'))
});
