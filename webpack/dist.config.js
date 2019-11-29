let baseConfig = require('./base.config')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");

//const path = require('path');

let config = {
            mode: 'production',
            entry: {
                index: './src/main_DIST.js',
            },
            output: {
                    path: __dirname + '/../dist',
                    filename: 'main.js',
                    // chunkFilename: '[name].bundle.js',
                },
            plugins: [
                new HtmlWebpackPlugin(),
                new UglifyJsPlugin({
                    test: /\.js(\?.*)?$/i
                }),
                new MinifyPlugin()
            ]
}

module.exports = Object.assign(baseConfig, config)


