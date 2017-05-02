var gulp = require("gulp");
var sass = require("sass");
var express = require("express");
var concat = require("gulp-concat");




var path = {
	"myApp": "myApp",
	"dist": "dist",
	"jades": ["views/**/*.jade"],
	"jsLibs": [
		"bower_components/jquery/dist/jquery.min.js", 
		"bower_components/lodash/dist/lodash.min.js", 
		"bower_components/angular/angular.min.js"
	]
}


gulp.task('jsLibs', function() {
	return gulp.src(path.jsLibs)
	.pipe(concat("libs.js"))
	.pipe(gulp.dest(path.dist + '/js'));
})


gulp.task('default', [
	'jsLibs'

])