'use strict';

import gulp from 'gulp';
import notify from 'gulp-notify';
import source from 'vinyl-source-stream';
import babel from 'gulp-babel';
import browserify from 'browserify';
import babelify from 'babelify';
import ngAnnotate from 'browserify-ngannotate';
import templateCache from 'gulp-angular-templatecache';
import sequence from 'gulp-sequence';

const interceptErrors = function(error) {
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};

gulp.task('browserify', () => {
  return browserify('src/ng1/app.js')
    .transform(babelify, {
      presets: ['es2015']
    })
    .transform(ngAnnotate)
    .bundle()
    .on('error', interceptErrors)
    //Pass desired output filename to vinyl-source-stream
    .pipe(source('app.js'))
    // Start piping stream to tasks!
    .pipe(gulp.dest('src/ng1/dist'));
});

gulp.task('views', function() {
  return gulp.src('src/ng1/**/*.html')
    .pipe(templateCache({
      root: 'src/ng1',
      standalone: true,
      module: 'templates'
    }))
    .pipe(gulp.dest('src/ng1'));
});

gulp.task('watch', function() {
  gulp.watch(['!src/ng1/dist/**/*.js', 'src/ng1/**/*.js'], ['browserify']);
  gulp.watch('src/ng1/**/*.html', ['views']);
});

gulp.task('build', sequence('views', 'browserify'));
gulp.task('default', sequence('views', 'browserify', 'watch'));