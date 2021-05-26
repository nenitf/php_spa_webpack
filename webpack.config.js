const { VueLoaderPlugin } = require("vue-loader");
const PhpManifestPlugin = require('webpack-php-manifest');
const path = require("path");

module.exports = (env, options) => {
  const isDevelopment = options.mode !== 'production'
  return {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: {
      profissionaisApp: "./resources/js/profissionais/main.js",
      homeApp: "./resources/js/home/main.js",
      rotaApp: "./resources/js/rota/main.js",
    },
    output: {
      path: path.resolve(__dirname, "public", "bundles"),
      filename: '[name].[chunkhash].js',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new PhpManifestPlugin({
        pathPrefix: "/public/bundles/"
      }),
    ],
    stats: 'minimal',
  }
};
