const path = require('path');
const dev = process.env.NODE_ENV == "development"
const liveServer = require('live-server')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();


if(dev){
    liveServer.start({
      root: "./",
      file: "index.html",
      port: 5050,
    })
}

module.exports = {
  watch: dev,
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", {
          loader: "css-loader",
          options: {
            modules: true,
          }
        }],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource", 
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.js', '.ts', '.css'],
    plugins: [new TsconfigPathsPlugin({/* options: see below */})]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.MAPBOX_TOKEN": JSON.stringify(process.env.MAPBOX_TOKEN),
    }),
  ],
};