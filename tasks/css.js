var gulp        = require('gulp');
var gplumber    = require('gulp-plumber');
var gsize       = require('gulp-size');
var gconcat     = require('gulp-concat');
var gsourcemaps = require('gulp-sourcemaps');
var gminifyCss  = require('gulp-minify-css');
 
gulp.task('css', function() {
    return gulp
        .src(['css/**/*.css'])
        .pipe(gplumber())
        .pipe(gsourcemaps.init())
        .pipe(gminifyCss())
        .pipe(gsourcemaps.write())
        .pipe(gconcat('app.css'))
        .pipe(gsize({
            title: 'app.css'
        }))
        .pipe(gulp.dest('dist'));
});