var gulp = require ('gulp'),
    gutil = require ('gulp-util'),
    coffee = require ('gulp-coffee'),
    browserify = require ('gulp-browserify'),
    concat = require ('gulp-concat');


var coffeeSources = ['components/coffee/tagline.coffee'];

var jsSources = [	'components/scripts/pixgrid.js',
					'components/scripts/rclick.js',
					'components/scripts/tagline.js',
					'components/scripts/template.js'];

gulp.task ('coffee', function (){
	gulp.src(coffeeSources)
	.pipe (coffee ( {bare :true})
		.on('error', gutil.log))
	.pipe (gulp.dest ('components/scripts'))
});

gulp.task ('js', function (){
	gulp.src(jsSources)
	.pipe (browserify())
	.pipe (concat('scripts.js'))
	.pipe(gulp.dest ('builds/development/js'))
});