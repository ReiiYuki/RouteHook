module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './dist/index.js',
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env', 'stage-0'],
        },
      },
    ],
  },
};
