var path = require('path')

module.exports = {
  entry: {
    build: './test/index.js',
  }, 
  output: {
    path: path.resolve(__dirname, './test'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: '#cheap-module-eval-source-map'
}
