module.exports = {
  entry: "./browser",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  mode: 'development',
  devtool: false
}