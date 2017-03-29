var path = require("path");

module.exports = {
  entry: './src/main.js',
  output: {
    path:  path.resolve(__dirname, 'src'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './src',
    port: 8100
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
