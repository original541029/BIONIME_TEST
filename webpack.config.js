const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: './src/js/*.js',
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
    }],
    plugins: [
      new CopyWebpackPlugin([{
          from: '../manifest.json',
          to: 'manifest.json'
        },
        {
          from: '../browserconfig.xml',
          to: 'browserconfig.xml'
        },
        {
          from: 'assets/images/favicons/android-chrome-192x192.png',
          to: 'assets/images/android-chrome-192x192.png'
        },
        {
          from: 'assets/images/favicons/android-chrome-256x256.png',
          to: 'assets/images/android-chrome-256x256.png'
        },
        {
          from: 'assets/images/favicons/mstile-150x150.png',
          to: 'assets/images/mstile-150x150.png'
        }
      ]),
      new ExtractTextPlugin({
        filename: 'assets/css/[name].[hash:7].bundle.css',
        allChunks: true
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),

      /*
        Pages
      */

      // // Desktop page
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'views/index.pug',
        inject: true
      }),

      ...utils.pages(env),
      ...utils.pages(env, 'blog'),

      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.$': 'jquery',
        'window.jQuery': 'jquery'
      }),
      new WebpackNotifierPlugin({
        title: 'Your project'
      })
    ]
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
  },


}