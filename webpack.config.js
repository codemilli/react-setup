/**
 * Created by youngmoon on 4/14/16.
 */

'use strict';

const path = require('path'),
    webpack = require('webpack'),
    NODE_ENV = process.env.NODE_ENV;

let webpackConfig = {
    module: {
        preLoaders: [
            {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/}
        ],
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            {test: /\.scss$/, loaders: ["style", "css?sourceMap", "sass?sourceMap"]}
        ]
    },

    resolve: {
        root: path.resolve(__dirname),
        alias: {
            'config': `client/config/env/${ NODE_ENV || 'development' }.js`
        }
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    target: 'web'
};

if (NODE_ENV === 'production') {
    webpackConfig = Object.assign({}, webpackConfig, {
        devtool: null,
        entry: [
            './client/app.js'
        ],
        output: {
            filename: 'bundle.js',
            path: '/client/',
            publicPath: '/public/'
        },
        plugins: webpackConfig.plugins.concat([
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                minimize: true,
                compress: {warnings: false}
            })
        ])
    });
} else {
    webpackConfig = Object.assign({}, webpackConfig, {
        devtool: 'source-map',
        entry: [
            'webpack/hot/dev-server',
            'webpack-hot-middleware/client',
            './client/app.js'
        ],
        output: {
            filename: 'bundle.js',
            path: '/client/',
            publicPath: '/public/'
        },
        plugins: webpackConfig.plugins.concat([
            new webpack.HotModuleReplacementPlugin()
        ]),
        target: 'web'
    });
}

module.exports = webpackConfig;