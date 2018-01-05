var path = require('path');

module.exports = {
  entry: {
    'example/simple/index.bundle': './example/simple/index',
    'example/custom/index.bundle': './example/custom/index',
  },
  resolve: {
    alias: {
      "src": path.join(__dirname, './src'),
      "lib": path.join(__dirname, './lib')
    }
  },
  output: {
    path: '.',
    filename: '[name].js',
    publicPath: '/example/bundles/',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.(css)$/,
        loaders: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]',
        ]
      },
    ],
  },
};
