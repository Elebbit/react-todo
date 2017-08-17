var webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.js',
        'webpack-dev-server/client?http://0.0.0.0:4000',
        'webpack/hot/only-dev-server'
    ],
    output: {
        path: '/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        filename: 'bundle.js',
        publicPath: '/',
        historyApiFallback: true,
        contentBase: './public',
        proxy: {
            "**": "http://localhost:3000"
        },
        stats: {
            assets: false,
            color: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false

        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react'],
                    plugins: ["react-hot-loader/babel"]
                }
            }
        ]
    },

};