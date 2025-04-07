const path = require('path');
const webpack = require('webpack');

module.exports = {
  // ...your other Webpack configurations
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
};