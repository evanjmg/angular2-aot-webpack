'use strict';
let BabiliPlugin = require("babili-webpack-plugin");
let webpack = require('webpack');
const ngToolsWebpack = require('@ngtools/webpack');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let NGTOOLS = [];
if (process.env.NGTOOLS) {
  NGTOOLS = [new ngToolsWebpack.AotPlugin({
      tsConfigPath: 'tsconfig-aot.json'
    })];
}


module.exports = [

  new webpack.ProgressPlugin(),
  new webpack.ContextReplacementPlugin(
    // The (\\|\/) piece accounts for path separators in *nix and Windows
    /angular(\\|\/)core(\\|\/)@angular/,
    path.join(process.cwd(), 'src')
  ),
  new CopyWebpackPlugin([
    { from: 'index.html' },
    { from: 'favicon.ico' }
  ]),
  new BabiliPlugin(),
  new BundleAnalyzerPlugin()
].concat(NGTOOLS);
