var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var runSequence = require('run-sequence');

gulp.task('output-css', function() {
  return gulp.src('scss/*.scss')
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(autoprefixer())
  .pipe(rename({
    dirname: 'css'
  }))
  .pipe(gulp.dest('./'))
  .pipe(rename({
    dirname: 'min',
    suffix: '.min'
  }))
  .pipe(cssnano())
  .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('scss/*.scss', ['output-css']);
});

gulp.task('default', function(callback) {
  runSequence(['output-css', 'watch'],
    callback
  );
});