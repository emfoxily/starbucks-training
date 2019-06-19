module.exports = {
  module: {
    rules: [{
      test: /\.sass$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            indentedSyntax: true,
            // data: `$green: rgb(0, 112, 74); $black: rgb(0, 0, 0)`,
          },
        },
      ],
    },
    {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader',
      ],
    },
    ],
  },
  // plugin omitted
};
