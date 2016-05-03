var gulp        = require('gulp');
var gplumber    = require('gulp-plumber');
var gsize       = require('gulp-size');
var gcached     = require('gulp-cached');
var gconcat     = require('gulp-concat');
var gremember   = require('gulp-remember');
var gsourcemaps = require('gulp-sourcemaps');
var guglify     = require('gulp-uglify');
var gorder      = require('gulp-order');


gulp.task('script', function() {
    return gulp
        .src('js/**/*.js')
        .pipe(gplumber())
        .pipe(gcached('scripts'))
        .pipe(gsourcemaps.init())
        // .pipe(gorder([
        //     'index.js',
        //     'main.js',
        //     '*'
        // ]))
        .pipe(guglify({ mangle : false }))
        .pipe(gsourcemaps.write())
        .pipe(gremember('scripts'))
        .pipe(gconcat('app.js'))
        .pipe(gsize({
            title: 'app.js'
        }))
        .pipe(gulp.dest('dist'));
});