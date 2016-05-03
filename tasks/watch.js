var gulp   = require('gulp');

gulp.task('watch', function(cb) {
    gulp.watch(['css/**/*.css'], ['css']);
    gulp.watch(['js/**/*.js'], ['script']);
    cb();
});