const { VueLoaderPlugin } = require("vue-loader");
// const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const PhpManifestPlugin = require('webpack-php-manifest');
const path = require("path");

module.exports = {
  entry: {
    profissionaisApp: "./resources/js/profissionais/main.js",
    homeApp: "./resources/js/home/main.js",
  },
  output: {
    path: path.resolve(__dirname, "public", "bundles"),
    filename: '[name].[chunkhash].js',
    clean: true,
    publicPath: "/public/bundles/", // seta no manifest
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
    // new WebpackManifestPlugin(),
    new PhpManifestPlugin({
      pathPrefix: "/public/bundles/"
    }),
  ],
  resolve: {
    alias: {
      vue$: "vue/dist/vue.runtime.esm.js",
    },
    extensions: ["*", ".js", ".vue", ".json"],
  },
  stats: 'minimal',
};
