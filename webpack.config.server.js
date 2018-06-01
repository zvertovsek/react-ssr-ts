const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const config = {
    target: 'node',
    entry: './src/server.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }
};

module.exports = merge(baseConfig, config);