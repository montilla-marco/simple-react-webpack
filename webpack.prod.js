const path = require("path");
const glob = require("glob");

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "src"),
};

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
  ],
  module: {
    rules: [

    ]
  }
});
