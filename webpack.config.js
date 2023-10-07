// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
      bundle:  path.resolve(__dirname, 'src/app.js'),
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'build'),
            directory: path.join(__dirname, 'src')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
}

