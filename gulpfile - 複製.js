var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
	  livereload = require('gulp-livereload'),
	  connect = require('gulp-connect');
    sourcemaps = require('gulp-sourcemaps');


var sourcePath = '*.scss', //原檔案路徑
    targetPath = 'dist/css';         //編譯後路徑


/*=========================任務區============================*/
//本地伺服器server===============
gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

//編譯css(sass,autoprefixer補前綴)===============
gulp.task('styles', function() {
    gulp.src(sourcePath)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe( autoprefixer( 'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4' ) )
        .pipe(gulp.dest(targetPath))
        .pipe(connect.reload());
});

//編譯html===============
gulp.task('html', function () {
  gulp.src("*.htm")
    .pipe(connect.reload());
});

//監測變化===============
gulp.task('watch', function () {
  gulp.watch(sourcePath,['styles']);
  gulp.watch("*.htm", ['html']);
});

//預設執行任務===============
gulp.task('default', ['connect', 'watch']);