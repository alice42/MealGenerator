const path = require("path");
const hwp = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.tsx",
      },
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: '/'
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
          {
            test: /\.css/,
            loaders: ['style-loader', 'css-loader'],
            include: __dirname + '/src'
          },
          {
            test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            loader: 'url-loader?limit=100000'
          },
        ],
      },
      devServer: {
        historyApiFallback: true,
        proxy: {
          '/api': {
            target: 'http://www.recipepuppy.com',
                secure: false,
                changeOrigin: true,
          }
        }
      },
      plugins: 
      [new hwp({favicon: path.join(__dirname, '/src/assets/favicon/favicon.ico'),
       template: path.join(__dirname, '/dist/index.html') })]
       
    }