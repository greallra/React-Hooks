const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
 
module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
          test: /\.js$/,
          include: path.resolve(__dirname, 'src'),
          use: ['babel-loader']
        }]
      },
    devServer: {
    contentBase:  path.resolve(__dirname, 'dist'),
    port: 9000,
    hot: true
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: "src/index.html" //source html
    }),
    new webpack.HotModuleReplacementPlugin()
    ]
}