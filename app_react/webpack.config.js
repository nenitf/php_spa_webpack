const PhpManifestPlugin = require('webpack-php-manifest');
const path = require("path");

module.exports = (env, options) => {
  const isDevelopment = options.mode !== 'production'
  return {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: {
      homeApp: "./resources/js/home/main.js",
      rotaApp: "./resources/js/rota/main.js",
    },
    output: {
      path: path.resolve(__dirname, "public", "bundles"),
      filename: '[name].[chunkhash].js',
      clean: true,
    },
    module:  {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ]
    },
    plugins: [
      new PhpManifestPlugin({
        pathPrefix: "/public/bundles/"
      }),
    ],
    stats: 'minimal',
  }
};
