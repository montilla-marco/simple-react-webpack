const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      watch: true,
    },
    hot: true,
    port: 3000,
  },
  module: {
    rules: [],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
  ],
});
