module.exports = {
  module: {
    rules: [
      {
        test:    /\.tsx?$/,
        use:     [{
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript'
            ],
          },
        }],
        exclude: /node_modules/
      }
    ]
  }
};
