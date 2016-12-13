
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var path = require('path');

module.exports = {
    context: __dirname,
    entry: "./src/index.js",
    cache: true,
    debug: true,
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "public", "js"),
        filename: "bundle.js"
    },
    resolve: {
        root: path.resolve(__dirname),
        alias: {
            Src: "src",
            Routes: "src/routes",
            Sass: "src/sass",
            Services: "src/services",
            Components: "src/components"
        },
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
        modulesDirectories: [
            "web_modules", 
            "node_modules", 
            "my_modules"
        ]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader' 
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?sourceMap!postcss-loader'
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                loader: 'file-loader?name=../fonts/[hash].[ext]'
            },
            { 
                test: /\.json$/, 
                loader: 'json-loader' 
            }
        ]
    },
    
    postcss: function () {
        return [autoprefixer];
    }
    
};