const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
    publicPath: '/dist/'
},
  devServer: {
    static: {
      directory: path.join(__dirname),
    }
  }
};