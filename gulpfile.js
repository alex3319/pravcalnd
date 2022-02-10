const gulp = require('gulp');
const gulpPlumber = require('gulp-plumber');
const gulpSASS = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

exports.default = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch('./assets/scss/**/*.scss', async () => {
        gulp.src('./assets/scss/**/*.scss').pipe(gulpPlumber()).pipe(gulpSASS()).pipe(gulp.dest('./')).pipe(browserSync.stream());
    });
};