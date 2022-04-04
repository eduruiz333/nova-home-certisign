const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function bildStyles() {
    return src('./assets/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(dest('./assets/css/'))
}

function watchTask() {
    watch(['./assets/sass/**/*.scss'], bildStyles)
}

exports.default = series(bildStyles, watchTask)