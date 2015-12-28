var path = require('path')
var webpack = require('webpack')
var fs = require('fs')

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: './src/index.js',
    target: 'node',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'auth-service.js'
    },
    externals: nodeModules,
    resolve: {
        root: path.resolve(__dirname),
        extensions: ['', '.js', '.jsx'],
        alias: {
            auth: 'src/auth'
        }
    },
    plugins: [
        new webpack.BannerPlugin('require("source-map-support").install();',
            { raw: true, entryOnly: false }),
        new webpack.IgnorePlugin(/vertx/)
    ],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel?presets[]=es2015'},
            {test: /\.json$/, loader: 'json'}
        ]
    }

};
