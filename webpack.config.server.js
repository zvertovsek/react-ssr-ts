const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    target: 'node',
    entry: './src/server/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [ webpackNodeExternals() ]
};

module.exports = merge(baseConfig, config);