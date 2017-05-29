var gulp = require('gulp');
var del = require('del');
var babel = require('gulp-babel');
var less = require('gulp-less');
var run_sequence = require('run-sequence');
var connect = require('gulp-connect');
var watch = require('gulp-watch');

gulp.task('clean', function (done) {
  return del(['./build'], done);
});

gulp.task('markup', function () {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('./build/'));
});

gulp.task('compile', function () {
  return gulp.src('src/js/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('styles', function () {
  return gulp.src('./css/css/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./build/css'));
});

gulp.task('build', function (done) {
  run_sequence('clean', ['markup', 'compile', 'styles'], done);
});

gulp.task('serve', ['build'], function () {
  connect.server({
    livereload: true,
    root: './build'
  });
  gulp.watch("./src/**/*.*", ['build']);
  watch("./build/**/*.*").pipe(connect.reload());
});

gulp.task('default', ['serve']);