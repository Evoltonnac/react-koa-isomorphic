const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname,'/public/index.html'),
  filename: 'index.html',
  inject: 'body',
});

const serverConfig = {
  target: 'node',
  externals: [nodeExternals()],
  mode: process.env.NODE_ENV,
  entry: [
    './server/index.js',
  ],
  output: {
    path: path.resolve(__dirname,'./dist'),
    filename: 'bundle_server.js',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: path.resolve(__dirname,'node_modules'),
        use: {
          loader: 'babel-loader',
        }
      },
    ],
  },
};

const clientConfig = {
  mode: process.env.NODE_ENV,
  entry: [
    './client/index.js',
  ],
  output: {
    path: path.resolve(__dirname,'./dist'),
    filename: 'bundle_client.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: path.resolve(__dirname,'node_modules'),
        use: {
          loader: 'babel-loader',
        }
      },
    ],
  },
};

module.exports = [serverConfig, clientConfig];