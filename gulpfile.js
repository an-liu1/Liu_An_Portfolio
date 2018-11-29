var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var minifyjs = require('gulp-js-minify');

gulp.task('minify-js', function(){
  gulp.src('./js/app.js')
    .pipe(minifyjs())
    .pipe(gulp.dest('./js'));
});

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
  .pipe(sass({outputStyle : 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest('./css'));
});


gulp.task('sass:watch', function()
{
gulp.watch('.sass/**/*.scss', ['sass']);
});

gulp.task('serve', function()
{
    browserSync.init({
        server: {
            baseDir : './',
            index: 'index.html'
        }
    });
});

gulp.task('default', () =>
    gulp.src('./images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./images'))
);