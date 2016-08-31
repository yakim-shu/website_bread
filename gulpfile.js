var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
	  livereload = require('gulp-livereload'),
	  connect = require('gulp-connect'),
    sourcemaps = require('gulp-sourcemaps'),
    jade = require('gulp-jade');



// src -  原檔案路徑
// dist - 編譯後路徑
var sourceCss  = 'src/sass/**/*.scss',
    targetCss  = 'dist/css',
    sourceJade = 'src/jade/**/*.jade',
    targetJade = 'src/jade/dist',
    sourceHtml = 'src/jade/dist/*.{htm,html}',
    targetHtml = 'dist';


/*=========================任務區============================*/
//本地伺服器server===============
gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

// jade===============
gulp.task('jade', function(){
  gulp.src(sourceJade)
    .pipe(jade())
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest(targetJade));
});

//編譯css(sass,autoprefixer補前綴)===============
gulp.task('styles', function() {
    gulp.src(sourceCss)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe( autoprefixer( 'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4' ) )
        .pipe(gulp.dest(targetCss))
        .pipe(connect.reload());
});

//編譯html===============
gulp.task('html', function () {
  gulp.src(sourceHtml)
    .pipe(gulp.dest(targetHtml))
    .pipe(connect.reload());
});

//監測變化===============
gulp.task('watch', function () {
  gulp.watch(sourceCss,['styles']);
  gulp.watch(sourceHtml, ['html']);
  gulp.watch(sourceJade, ['jade']);
});

//預設執行任務===============
gulp.task('default', ['jade', 'watch', 'connect']);