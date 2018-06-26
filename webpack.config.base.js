

module.exports = {
    mode: "development",
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                'react',
                                'stage-0',
                                ['env', { targets: { browsers: ['last 2 versions'] } }]
                            ]
                        }
                    },
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: 'tsconfig.json',
                        }
                    }
                ],
                exclude: /node_modules/,
            }
        ]
    }
};