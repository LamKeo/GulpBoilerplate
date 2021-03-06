var gulp = require ('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var watch = require('gulp-watch');

watch(['./source/*.js'], function() {
  console.log("app has been modified; re-compiling");
  gulp.start('default');
});


//gulp.task(nameOfTask, callback);
gulp.task('default', function() {
  return browserify('./source/app.js')
      .transform("babelify", {presets: ["es2015", "react"]})
      .bundle()
      .pipe(source('build.js'))
      .pipe(gulp.dest('./build/'))
});
