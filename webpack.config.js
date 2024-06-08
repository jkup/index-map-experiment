const path = require("path");

module.exports = {
  mode: "development", // Set to 'development' or 'production'
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    sourceMapFilename: "bundle.js.map",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            sourceMaps: true,
          },
        },
      },
    ],
  },
  devtool: "source-map",
};
