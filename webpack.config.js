const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const LoadablePlugin = require("@loadable/webpack-plugin");
var ProgressBarPlugin = require('progress-bar-webpack-plugin');


module.exports = () => ({
  mode: "development",
  entry: {
    app: "./src/client/index",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "",
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [new CleanWebpackPlugin(), new LoadablePlugin(),  new ProgressBarPlugin()],
});