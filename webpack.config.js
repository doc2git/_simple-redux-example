var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require("html-webpack-plugin");
let port = 8770;
module.exports = {
  devServer: {
    port,
  },
  entry: {
      index: path.resolve(__dirname, 'index.js')
    },
    resolve: {
      extensions: ['.jsx', '.js', '.json'],
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.js[x]?$/,
          use: 'babel-loader',
          exclude: path.resolve(__dirname, 'node_modules')
        },
        {
          test: /\.css/,
          loader: 'style!css'
        },
        {
          test: /\.less/,
          loader: 'style!css!less'
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url?limit=8192'
        },
        {
          test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000"
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
      new OpenBrowserPlugin({ url: 'http://localhost:' + port })
    ]
};
