const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const LoadablePlugin = require("@loadable/webpack-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const webpack = require('webpack');

module.exports = () => {
  return ({
    entry:{
      app : './src/client/index'
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
    plugins: [new CleanWebpackPlugin(), new LoadablePlugin(), new ProgressBarPlugin(),
      new WorkboxPlugin.InjectManifest({
        swSrc: path.resolve(__dirname, 'src') + "/sw.js",
        swDest: path.resolve(__dirname, 'public')+ "/service-worker.js"
      })
    ]
  });
};