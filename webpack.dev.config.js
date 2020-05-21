const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpackMock = require('webpack-api-mocker')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    before(app) {
      webpackMock(app, path.resolve(__dirname, 'mock/index.js'))
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(ttf|eof|woff|woff2|svg)/,
        use: 'file-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'public/index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js','.vue'], // 省略 import './App.vue' 的后缀名
    alias: {
      '@': path.join(__dirname, 'src'),
      'common': path.join(__dirname, 'src/common'),
      'api': path.join(__dirname, 'src/api/')
    }
  }
}
