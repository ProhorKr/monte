const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

process.on('warning', (warning) => {
  console.log(warning.stack, ' DATA DEBUG');
}); 

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './scripts/index.js',
  output: {
    filename: `./js/${filename('js')}`,
    path: path.resolve(__dirname, 'public'),
    clean: true,
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/',
    open: true,
    watchContentBase: true,
    port: 8080,
  },
  target: 'web',
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimize: false
  },
  plugins: [
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
      }),
      new MiniCssExtractPlugin({
        filename: `./css/${filename('css')}`
      }),
  ],
  devtool: isProd ? false : 'source-map',
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ['html-loader']
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev
            },
          },
          'css-loader'
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(?:|gif|png|jpg|jpeg|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: `./img/${filename('[ext]')}`
          }
        }],
      },
      {
        test: /\.(?:|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: `./fonts/${filename('[ext]')}`
          }
        }],
      }
    ]
  }
};