const { watch, series, parallel, src, dest} = require('gulp');

const clean = require('./gulp-task/clean.js');
const sass = require('./gulp-task/sass.js');
//const server = require('./gulp-task/browsersync.js');

function watchFiles() {
    watch('./sass/**/*', sass.build);
}

const build = series(clean.clean, sass.build);

const watchFolder = series(watchFiles);

exports.build = build;
exports.watch = watchFolder;
exports.default = build;
