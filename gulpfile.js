

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var path = {
  'img': 'src/images/',
  'sass': 'src/sass/',
  'css': 'src/css/',
  'js': 'src/js/'
}

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "sshohei.dev"
    });
});

gulp.task('php-reload', function () {
    browserSync.reload();
});

// Sassをコンパイルし、ベンダープレフィックスを付与
gulp.task("sass", function() {
    gulp.src(path.sass + "**/*.scss")
        .pipe(plumber())
        .pipe(sass({
            style   : 'compressed',
            compass : true
        }))
        .pipe(autoprefixer('last 2 version', 'ie 8', 'ie 7'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({stream: true}));
});


// js minify 
gulp.task("js", function() {
        browserify({
          entries: [
            path.js + 'common.js'
          ]
        })
        .bundle()
        .pipe(source('common.min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.reload({stream: true}));
});
 
gulp.task('default',['browser-sync','sass','js',], function() {
    gulp.watch([path.js + 'common.js'],['js']);
    gulp.watch(path.sass + '**/*.scss',['sass']);
    gulp.watch('**/*.php',['php-reload']);
    
});