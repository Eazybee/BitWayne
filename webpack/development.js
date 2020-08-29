const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 8000
  },
  devtool: "source-map",
  plugins: [new ErrorOverlayPlugin()],
};
