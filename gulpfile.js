var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var browserSync = require('browser-sync').create();

gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
     	paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'))
});

gulp.task('browser-sync', function() {
    browserSync.init({
      proxy: "localhost/lifeblue/index.html"
    });
});

gulp.task('watch', ['browser-sync', 'less'], function (){
	gulp.watch('index.html', browserSync.reload); 
	gulp.watch('less/*.less', ['less']); 
	gulp.watch('css/*.css', browserSync.reload); 
	gulp.watch('js/*.js', browserSync.reload); 
});