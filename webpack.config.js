const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',

  devServer: {
    host: 'localhost',
    port: 8080,
    // enable HMP on the devServer
    hot: true,
    // fallback to root for other urls
    historyApiFallback: true,

    static: {
      // match the output path
      directory: path.resolve(__dirname, 'dist'),
      // match the output 'publicPath'
      publicPath: '/',
    },

    // headers: { 'Access-Control-Allow-Origin': '*' },

    // proxy required to make api calls to express server while using hot-reload webpack server
    proxy: {
      '/log/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
      '/data/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ],

  // TODO: might need to make a build folder?
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ],
  },
  node: {
        global: true
    }
};
