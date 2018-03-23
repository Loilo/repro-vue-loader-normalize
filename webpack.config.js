const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {}
        }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}