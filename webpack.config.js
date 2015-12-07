var path = require('path');
var webpack = require('webpack');

var webpackSettings = {
  context: path.resolve('./src'),
  entry: [
    './Calendar.js'
  ],
  output: {
    path: path.resolve('dist/'),
    publicPath: '/dist/',
    filename: 'main.js'
  },
  module: {
    loaders: [{
      test: /\.(es6|js)$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js']
  }
};

module.exports = webpackSettings;
