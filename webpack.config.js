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
    filename: 'main.js',
    libraryTarget: "var",
    library: "Calendar"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel"
    }]
  },
  externals: {
    'moment': 'moment',
    'moment-range': 'moment-range',
    'cs': 'classnames'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.optimize.DedupePlugin()
  ],
  resolve: {
    extensions: ['', '.js']
  }
};

module.exports = webpackSettings;
