var path = require('path');
var webpack = require('webpack');

var webpackSettings = {
  context: path.resolve('./'),
  entry: [
    './index.js'
  ],
  output: {
    path: path.resolve('dist/'),
    publicPath: '/dist/',
    filename: 'react-form-calendar.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  resolve: {
    extensions: ['', '.js']
  }
};

module.exports = webpackSettings;
