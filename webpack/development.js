const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;


const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

console.log('bee', envKeys);
module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 8000
  },
  devtool: "source-map",
  plugins: [
    new ErrorOverlayPlugin(),
    new webpack.DefinePlugin(envKeys)
  ],
};
