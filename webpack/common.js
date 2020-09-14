const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const buildDir = path.join(__dirname, '../build');


module.exports = {
  entry: path.join(__dirname, '../src', 'index.tsx'),
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      '<src>': path.resolve(__dirname, '../src'),
      '<components>': path.resolve(__dirname, '../src/components'),
      '<hooks>': path.resolve(__dirname, '../src/hooks'),
      '<helpers>': path.resolve(__dirname, '../src/helpers'),
      '<styles>': path.resolve(__dirname, '../src/styles'),
      '<assests>': path.resolve(__dirname, '../src/assests')
    }
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public', 'index.html'),
      inject: 'body'
    }),
    new CopyPlugin({
      patterns: [
        { from: process.cwd()+'/public/statics', to: buildDir+'/statics' },
        { from: path.join(__dirname, '../public', 'manifest.json'), to: buildDir },
        { from: path.join(__dirname, '../public', '_redirects'), to: buildDir },
        { from: path.join(__dirname, '../public', 'robot.txt'), to: buildDir },
      ],
    }),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg|ttf|otf)$/,
        loaders: ['file-loader']
      },
    ]
  }
};
