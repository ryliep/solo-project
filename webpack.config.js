const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./client/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // TODO: might need to make a build folder?
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
      },
    ],
  },
};
