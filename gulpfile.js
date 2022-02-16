const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browsersync = require('browser-sync').create();

// Sass task
function sassTask(){
    return src('scss/style.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(dest('assets/css'));
}

// Browser Sync Task
function browsersyncServe(cb){
    browsersync.init({
        server: {
            dir: '/'
        }
    });
    cb();
}

function browsersyncReload(cb){
    browsersync.reload();
    cb();
}

// Watch Task

function watchTask(){
    watch('*.html', browsersyncReload);
    watch('*/**/*.js', browsersyncReload);
    watch('scss/**/*.scss', series(sassTask, browsersyncReload));
}

// Default Task
exports.default = series(
    sassTask,
    browsersyncServe,
    watchTask
)