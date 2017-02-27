'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');



gulp.task('workflow', function () {
	gulp.src('./wp-content/themes/twentysixteen-child/scss/**/*.scss')
		// Insert tasks here
		    .pipe(sass().on('error', sass.logError))

	.pipe(gulp.dest('./wp-content/themes/twentysixteen-child/'))
});