var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry : ['./src/main.js','./src/sass/main.scss'],
  output:{
    path : path.resolve(__dirname,'./dist/'),
    filename : 'js/app.bundle.js'
  },
  module : {
    rules : [
      {
        test : /\.(sass|scss)$/,
        loader : ExtractTextPlugin.extract(['css-loader','sass-loader'])
      }
    ]
  },
  plugins : [
    new ExtractTextPlugin({
      filename : 'css/app.bundle.css',
      allChunks :true
    }),
    new HtmlWebpackPlugin({
      title : 'Front End with Webpack'
    })
  ]
}