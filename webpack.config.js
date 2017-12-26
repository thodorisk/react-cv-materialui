const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');

// CSS configuration
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'postcss-loader', 'sass-loader']
});
const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'];
const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: {
    app: './src/app.js',
    header: './src/header.js',
    intro: './src/intro.js',
    personal: './src/personal.js',
    experience: './src/experience.js',
    education: './src/education.js',
    skills: './src/skills.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: cssConfig
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        use: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?name=images/[name][hash:6].[ext]',
          'image-webpack-loader'
        ]
      },
      {
        test: /\.ico$/i,
        use: [
          'file-loader?name=[name].[ext]',
          'image-webpack-loader'
        ]
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000&name=fonts/[name].[ext]'
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    compress: true,
    hot: true,
    stats: 'errors-only'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Thodoris Karagiannis | Front-End Enginner',
      hash: true,
      excludeChunks: ['about'],
      template: './src/index.html'
    }),
    new ExtractTextPlugin({
      filename: '/css/[name].css',
      disable: process.env.NODE_ENV === 'development',
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
      postcss: [autoprefixer]
    }),
    new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, 'src/*.html')),
      purifyOptions: { minify: true }
    })
  ]
};
