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
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel"
    }]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'moment': 'Moment',
    'moment-range': 'MomentRange',
    'classnames': 'Classnames'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  resolve: {
    extensions: ['', '.js']
  }
};

module.exports = webpackSettings;
