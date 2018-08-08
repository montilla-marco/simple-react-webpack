const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const sourceDir = './src/';

const PATHS = {
  app: sourceDir + 'index.js',
  build: path.resolve(__dirname, 'dist')
};
module.exports = {
  entry: {
    main: PATHS.app
  },
  output: {
    filename: '[name].[hash].js',
    path: PATHS.build
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Custom template',
      // Load a custom template (lodash by default see the FAQ for details)
      template: sourceDir + 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
