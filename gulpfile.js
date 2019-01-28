'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const browserSync = require('browser-sync').create()


gulp.task('styles', function() {
 	return gulp.src('./src/styles/**/*.scss')
 		.pipe(sourcemaps.init())
 			.pipe(sass())
 		.pipe(sourcemaps.write())
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

gulp.task('clean', function() {
	return del('build')
});

gulp.task('watch', function() {
  	gulp.watch('./src/scripts/**/*.js', gulp.series('scripts'))
  	gulp.watch('./src/styles/**/*.scss', gulp.series('styles'));
  	gulp.watch('./src/fonts/**/*', gulp.series('fonts'));
  	gulp.watch('./src/images/**/*', gulp.series('images'));
  });

gulp.task('browser-sync', function() {
 browserSync.init({
        server: {
            baseDir: "./build"
        },
    });
});


gulp.task('ui', gulp.parallel('watch', 'browser-sync'))


  gulp.task('build', gulp.series('clean', 'styles', 'images', 'fonts', 'pages', 'scripts', 'ui'));	