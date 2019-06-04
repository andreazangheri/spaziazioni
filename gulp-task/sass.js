const autoprefixer = require('autoprefixer');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');

function sassBuild() {
    return gulp
        .src('./sass/style.scss')
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('./css/style.css'));
}

module.exports = {
    build: sassBuild
}
