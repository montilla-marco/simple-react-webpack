const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PATHS = {
  src: path.resolve(__dirname, "src"),
  assets: path.resolve(__dirname, "src/assets"),
  app: path.resolve(__dirname, "src/index.js"),
  template: path.resolve(__dirname, "public/index.html"),
  build: path.resolve(__dirname, "dist"),
};

module.exports = {
  entry: {
    main: PATHS.app,
  },
  output: {
    filename: "[name].[hash].js",
    path: PATHS.build,
    assetModuleFilename: 'assets/[hash][ext][query]'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESLintPlugin({ fix: true }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      title: "marcomarco++ simple react webpack boilerplate",
      template: PATHS.template,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: PATHS.src,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
            plugins: [],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
