var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    target: 'node',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'auth-service.js'
    },
    resolve: {
        root: path.resolve(__dirname),
        extensions: ['', '.js', '.jsx'],
        alias: {
            auth: 'src/auth'
        }
    },
    plugins: [
        new webpack.BannerPlugin('require("source-map-support").install();',
            { raw: true, entryOnly: false })
    ],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel?presets[]=es2015'},
            {test: /\.json$/, loader: 'json'}
        ]
    }

};