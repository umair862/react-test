'use strict';
 
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
console.log("target event is " + TARGET);

// HTML webpack plugin to generate HTML for PROD 
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/reactWebApp/index.html',
  filename: 'index.html',
  inject: 'body'
});

// JS minification
var JSWebpackUglifyJsPluginConfig = new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false,},
    output:   { comments: false,},
});


var config = { 
   debug: true,
   entry: [ 
      __dirname + "/src/reactWebApp/js/main.js",
    ],
    resolve: {
      extensions: ['', '.js', '.jsx', '.scss']
    },
    module: {
        loaders: [
           {
               test: /\.jsx?$/,
               exclude: /node_modules/,
               loader: 'babel-loader',
               query: {
                   presets: ['es2015', 'react'],
               }
           },
           {
               test: /\.scss$/,
               include: /stylesheets/,
               loaders: ["style", "css", "sass"]
           }
        ]
    }
};


// Detect how npm is run and branch based on that
switch(TARGET) {
  case 'start':
     config = merge(
      config,
        {
          devtool: 'eval-source-map',
          output: {
              path: __dirname,
              filename: 'app.js'
          }, 
          devServer: {
             contentBase: "./",
             colors: true,
             historyApiFallback: true,
             inline: true
          }, 
          plugins: [
            HTMLWebpackPluginConfig
          ]
        }
      );
    break;
  case 'webapp-dev':
    config = merge(
      config,
      {
        devtool: 'source-map',
        output: {
            path: __dirname+'/webApp/dev/',
            filename: 'app.js',
            sourceMapFilename: "app.js.map",
        }, 
        devServer: {
           contentBase: "./dev",
           colors: true,
           historyApiFallback: true,
           inline: true
        }, 
        plugins: [
          HTMLWebpackPluginConfig
        ]
      }
    );
    break;
  case 'webapp-prod':
    config = merge(
      config,
      {
        output: {
          path: __dirname+'/webApp/prod/',
          filename: 'app.min.js',
          sourceMapFilename: "app.min.js.map",
        }, 
        plugins: [
            JSWebpackUglifyJsPluginConfig, HTMLWebpackPluginConfig,
             new webpack.DefinePlugin({
              'process.env': {
                'NODE_ENV': JSON.stringify('production')
              }
            })
        ]
      }
    );
    break;
    default: break; 
}
module.exports = config;
