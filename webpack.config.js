const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new webpack.ProvidePlugin({
      Proxy: [path.resolve(__dirname, "./src/Proxy.js"), "Proxy"],
      TTJSON: [path.resolve(__dirname, "./src/TTJSON.js"), "TTJSON"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [
                [
                  "@babel/plugin-transform-runtime",
                  {
                    corejs: 3,
                  },
                ],
              ],
            },
          },
          {
            loader: "babel-loader",
            options: {
              plugins: [
                [
                  "replace-identifiers",
                  {
                    JSON: "TTJSON",
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
  mode: "none",
};
