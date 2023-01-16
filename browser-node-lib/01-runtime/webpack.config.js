const webpack = require('webpack')

module.exports = {
  entry: "./index",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  mode: 'development',
  resolve: {
    fallback: {
        "process": require.resolve("process/browser")
      } 
  },
  plugins: [
    new webpack.ProvidePlugin({
        // you must `npm install buffer` to use this.
        process: ['process']
      })
  ],
  devtool: false
}