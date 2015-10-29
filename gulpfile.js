'use strict';

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');
var del = require('del');

gulp.task('minimize-images', function() {
  return gulp.src('img/**/*.gif')
    .pipe(changed('build'))
    .pipe(imagemin())
    .pipe(gulp.dest('build'));
});

gulp.task('clean', function(callback) {
  del('build/*', callback);
});

gulp.task('watch', function() {
  gulp.watch('img/**/*', ['minimize-images']);
});

gulp.task('default', ['minimize-images']);
