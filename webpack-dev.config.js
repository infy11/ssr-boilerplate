const baseConfig = require('./webpack-common.config');
const {merge}  = require('webpack-merge');

module.exports = merge(baseConfig(), {
    mode: 'development',
    devtool: 'inline-source-map',
    stats: {
        colors: true,
        hash: false,
        version: false,
        timings: false,
        assets: false,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: true,
        errorDetails: false,
        warnings: false,
        publicPath: false
    }
} )


