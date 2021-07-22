const PhpManifestPlugin = require('webpack-php-manifest');
const path = require("path");

module.exports = (env, options) => {
  const isDevelopment = options.mode !== 'production'
  return {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: {
      homeApp: "./resources/js/home/index.tsx",
      rotaApp: "./resources/js/rota/index.tsx",
    },
    output: {
      path: path.resolve(__dirname, "public", "bundles"),
      filename: '[name].[chunkhash].js',
      clean: true,
    },
    module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
      new PhpManifestPlugin({
        pathPrefix: "/public/bundles/"
      }),
    ],
    stats: 'minimal',
  }
};
