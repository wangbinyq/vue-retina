var path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry: {
    build: './src/index.js',
  }, 
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'vue-retina.js',
    library: 'VueRetina',
    libraryTarget: 'umd',
    umdNamedDefine: true
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
  plugins: [
    new UglifyJSPlugin()
  ]
}
