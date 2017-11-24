const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './client/index.js',

  output: {
    path: resolve(__dirname, 'public', 'built'),
    filename: 'bundle.js',
    publicPath: 'assets',
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },

  devServer: {
    inline: true,
    port: 8337,
    hot: true,
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
}
