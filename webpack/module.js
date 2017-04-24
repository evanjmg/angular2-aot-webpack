'use strict';
let lodash = require('lodash');
let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let TypescriptLoader;

if (process.env.NGTOOLS) {
  TypescriptLoader = { loader: '@ngtools/webpack' };
} else {
  TypescriptLoader = { use: ['awesome-typescript-loader?configFileName=tsconfig.json', 'angular2-template-loader'] };
}
module.exports = {
  rules: [
    lodash.assign({
      test: /\.ts$/,
    }, TypescriptLoader),
    {
      test: /\.html$/,
      use: 'raw-loader'
    }
  ]
};
