
var gulp = require("gulp");
var connect = require("gulp-connect");


gulp.task('dev-server', function () {
    connect.server({
        root: "./src",
        livereload: true,
        port: 4000
    });
});










