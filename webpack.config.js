const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "store/static/js/[name].[chunkhash:8].js",
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: ["env", "react-app"],
          ignore: ["build", "node_modules"],
        },
      },
    ],
  },
};
