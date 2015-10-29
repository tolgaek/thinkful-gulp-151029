'use strict';

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('minimize-images', function() {
  return gulp.src('img/**/*.gif')
    .pipe(imagemin())
    .pipe(gulp.dest('build'));
});

gulp.task('default', ['minimize-images']);
