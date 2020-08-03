const webpack = require('webpack');
const path = require('path');
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    main: './src/index.js',
    about: './src/pages/about/index.js',
    analytics: './src/pages/analytics/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].[chunkhash].js'
  },
  resolve: {
    alias: {
      images: path.resolve(__dirname, 'src/images')
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/env'],
          plugins: ['@babel/plugin-proposal-class-properties']
        }},
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        sideEffects: true,
        use: [(isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }
        },
        'postcss-loader']
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/i,
        use: [
          'file-loader?name=./images/[name].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {}
          },
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./vendor/[name].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/about/about.html',
      filename: 'about.html',
      chunks: ['about']
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/analytics/analytics.html',
      filename: 'analytics.html',
      chunks: ['analytics']
    }),
    require('autoprefixer'),
      require('cssnano')({
        preset: 'default',
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].[contenthash].css'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
              preset: ['default'],
      },
      canPrint: true
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
  }
}
