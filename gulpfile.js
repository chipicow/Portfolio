// including plugins
var gulp = require('gulp')
, uglify = require("gulp-uglify");
 
var concat = require('gulp-concat');

var appJsFiles = [
    './js/main.js',
    './partials/**/**/*.js',
    './partials/**/*.js'
];

var nodemon = require('gulp-nodemon');
gulp.task('nodemon', function() {
  nodemon({
    script: 'server.js',
    ext: 'js',
    ignore: ['dist/']
  })
  .on('restart', function() {
    console.log('>> node restart');
  })
});
// task
gulp.task('js', function () {
    gulp.src(appJsFiles) // path to your files
    .pipe(uglify())
	.pipe(concat('app.js'))
    .pipe(gulp.dest('./js'));
});