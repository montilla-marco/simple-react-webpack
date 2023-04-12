const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge');
// eslint-disable-next-line import/no-extraneous-dependencies
// const webpack = require('webpack');
// eslint-disable-next-line import/no-unresolved
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// eslint-disable-next-line import/extensions
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
    // new MiniCssExtractPlugin({
    //   filename: '[name].[hash].css',
    //   chunkFilename: '[id].[hash].css'
    // }),
    // new webpack.HotModuleReplacementPlugin(),
  ],
});
