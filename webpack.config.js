const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: `` ['@babel/preset-env']
        }
      }
    }]
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }]
  },
  devServer: {
    contentBase: "dist",
    overlay: true
  }
};