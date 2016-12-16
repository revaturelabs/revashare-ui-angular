
var gulp = require("gulp");
var gutil = require("gulp-util");
var del = require("del");

var sass = require("gulp-sass");

var webpack = require("webpack");
var webpack_config = require("./webpack.config.js");

var connect = require("gulp-connect");

var filesToMove = [
    "./src/index.html"
];


function build_frontend (config, done) {
    webpack(config, function (err, stats) {
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        console.log("webpack finished");
        
        gulp.src(filesToMove, {base: './src'})
            .pipe(gulp.dest('./public'));
        console.log('files finished moving');
        
        done();
    });
};


gulp.task('clean', function () {
    return del(['./public/**',
    '!./public',
    '!./public/.gitignore']);
});


gulp.task("build_front_dev", ["clean"], function (done) {
    build_frontend(webpack_config, done);
});


var cors = require("cors");
gulp.task('dev-server', ['simple_build'], function () {
    connect.server({
        root: "./public",
        livereload: true,
        port: 4000,
        middleware: function() {
            return [cors()];
        }
    });
    var watch_list = ['./src/**'];
    gulp.watch(watch_list, ['simple_build']);
});


gulp.task("build_javascript", function (done) {
    build_frontend(webpack_config, done);
});


gulp.task("simple_build", ["clean", "build_javascript"], function () {

    gulp.src("./src/**/*.html", { base: "./src" })
        .pipe(gulp.dest("./public"));

    gulp.src("./src/**/*.scss").pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./public/css"));

});









