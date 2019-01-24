'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');


gulp.task('styles', function() {
 	return gulp.src('./src/styles/**/*.scss')
 		.pipe(sass())
 		.pipe(gulp.dest('./build/assets/css/'));
 })

gulp.task('images', function() {
 	return gulp.src('./src/images/**/*')
 		.pipe(gulp.dest('./build/assets/images/'))
 })

gulp.task('fonts', function() {
 	return gulp.src('./src/fonts/**/*')
 		.pipe(gulp.dest('./build/assets/fonts'))
})

gulp.task('pages', function buildHTML() {
  return gulp.src('./src/*.pug')
  	.pipe(pug())
  	.pipe(gulp.dest('./build/'));
});

gulp.task('scripts', function() {
 	return gulp.src('./src/scripts/**/*.js')
 		.pipe(gulp.dest('./build/assets/scripts'))
});

  gulp.task('build', gulp.series('styles', 'images', 'fonts', 'pages', 'scripts'));