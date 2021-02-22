const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.tsx",
      },
      output: {
        path: resolve(__dirname, "dist"),
        filename: "bundle.js",
      },
      resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: "babel-loader",
            exclude: /node_modules/,
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "index.html",
          inject: "body",
        }),
      ],
    }