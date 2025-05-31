const {src, dest, watch, series, task} = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

const PATH = {
    htlm: {
        src: 'src/*.html',
        dist: 'dist'
    },
    sass: {
        src: 'src/sass/*.scss',
        dist: 'dist/css'
    },
    js: {
        src: 'src/js/*.js',
        dist: 'dist/js'
    }
}
task('js', ()=>{
    return src(PATH.js.src)
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(dest(PATH.js.dist));
});

task('sass', ()=>{
    return src(PATH.sass.src)
        .pipe(sourcemaps.init())
        .pipe(sass({style: 'compressed'}).on('error', sass.logError))
        .pipe(
            rename(function (path) {
                path.basename += '.min'
            })
        )
        .pipe(sourcemaps.write('./maps'))
        .pipe(dest(PATH.sass.dist));
});
task('html', ()=>{
    return src(PATH.htlm.src)
        .pipe(dest(PATH.htlm.dist));
});

task('watch', ()=>{
    watch(PATH.htlm.src, series('html'));
    watch(PATH.sass.src, series('sass'));
    watch(PATH.js.src, series('js'));
});

task('default', series('html', 'sass', 'js'));