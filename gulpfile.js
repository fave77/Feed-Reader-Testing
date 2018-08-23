const gulp = require('gulp');
const htmlMin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const cleancss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const del = require('del');
const runSequence = require('run-sequence');

/*minify all the HTML files*/
gulp.task('minify-html', () => {
    gulp.src('./src/*.html')
        .pipe(htmlMin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./dist'));
});

/*minify all the JavaScript files*/
gulp.task('minify-js', () => {
    gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));

    gulp.src('./src/jasmine/spec/*.js')
        .pipe(gulp.dest('./dist/jasmine/spec'));

    gulp.src('./src/jasmine/lib/jasmine-2.1.2/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/jasmine/lib/jasmine-2.1.2'));
});

/*minify all the stylesheets*/
gulp.task('minify-css', () => {
    gulp.src('./src/css/*.css')
        .pipe(cleancss())
        .pipe(gulp.dest('./dist/css'));

    gulp.src('./src/jasmine/lib/jasmine-2.1.2/*.css')
        .pipe(cleancss())
        .pipe(gulp.dest('./dist/jasmine/lib/jasmine-2.1.2'));
});

/*optimize all the images*/
gulp.task('minify-image', () => {
    gulp.src('./src/jasmine/lib/jasmine-2.1.2/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/jasmine/lib/jasmine-2.1.2'));
});

/*copy all the fonts from the source folder to the destination folder*/
gulp.task('copy-fonts', () => {
    gulp.src('./src/fonts/**')
        .pipe(gulp.dest('./dist/fonts'));
});

/*clean the destination folder before piping all the source files*/
gulp.task('clean', () => del(['dist']));

/*run the default task*/
gulp.task('default', ['clean'], () => {
    runSequence('minify-html', 'minify-js', 'minify-css', 'minify-image', 'copy-fonts');
});

gulp.watch('./src/jasmine/spec/*.js', ['minify-js']);