const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyCss = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

const style = () => {
    return gulp.src('./stylesheets/scss/*.scss')
               .pipe(sass().on('error', sass.logError))
               .pipe(minifyCss())
               .pipe(gulp.dest('./stylesheets/css'))
               .pipe(browserSync.stream());
};

const watch = () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./stylesheets/scss/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/*.js').on('change', browserSync.reload);
};

exports.style = style;
exports.watch = watch;