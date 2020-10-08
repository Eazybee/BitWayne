const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.REACT_APP_FIRE_ID': JSON.stringify(process.env.REACT_APP_FIRE_ID),
      'process.env.REACT_APP_FIRE_KEY': JSON.stringify(process.env.REACT_APP_FIRE_KEY),
      'process.env.REACT_APP_FIRE_AUTH_DOMAIN': JSON.stringify(process.env.REACT_APP_FIRE_AUTH_DOMAIN),
      'process.env.REACT_APP_FIRE_DB': JSON.stringify(process.env.REACT_APP_FIRE_DB),
      'process.env.REACT_APP_FIRE_PROJECT_ID': JSON.stringify(process.env.REACT_APP_FIRE_PROJECT_ID),
      'process.env.REACT_APP_FIRE_STORAGE_KEY': JSON.stringify(process.env.REACT_APP_FIRE_STORAGE_KEY),
      'process.env.REACT_APP_FIRE_MSG_SENDER_ID': JSON.stringify(process.env.REACT_APP_FIRE_MSG_SENDER_ID),
      'process.env.REACT_APP_FIRE_MEASUREMNET_ID': JSON.stringify(process.env.REACT_APP_FIRE_MEASUREMNET_ID),
      'process.env.REACT_APP_GOOGLE_CAPTCHA': JSON.stringify(process.env.REACT_APP_GOOGLE_CAPTCHA),
      'process.env.REACT_APP_EMAIL_USER_ID': JSON.stringify(process.env.REACT_APP_EMAIL_USER_ID),
      'process.env.REACT_APP_EMAIL_SERVICE_ID': JSON.stringify(process.env.REACT_APP_EMAIL_SERVICE_ID),
      'process.env.REACT_APP_EMAIL_CONTACT_ID': JSON.stringify(process.env.REACT_APP_EMAIL_CONTACT_ID),
    })
  ],
  performance: {
    hints: false,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        cache: true,
        parallel: 8,
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
};
