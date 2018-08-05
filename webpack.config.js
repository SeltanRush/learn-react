const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
		index: './src/pages/index/index.js'
	},
  output: {
		publicPath: '/',
    path: path.resolve(__dirname, "public"),
    filename: "[name].js"
	},
	devtool: '#sourcemap',
  module: {
    rules: [
      {
        test: /\.pug/,
        use: 'pug-loader'
			},
			{
				test: /\.css/,
				use: ['style-loader','css-loader']
			},
      {
        test: /\.styl/,
        use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								importLoaders: 2,
								sourceMap: true,
								minimize: false
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: function() {
									return [ autoprefixer({browsers: ['last 2 versions']})]
								}
							}
						},
						'stylus-loader'
					]
				})
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.eot$|\.woff2$|\.ttf$|\.wav$|\.mp3$/,
        use: "file-loader?name=components/[path][name].[ext]"
      },
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        use: {
					loader: 'babel-loader',
          options: {
						presets: ['env','react']
          }
        }
			}
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
		compress: true,
		stats: 'errors-only',
		historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
			template: './src/pages/index/index.pug',
			filename: 'index.html',
			chunks: ['index']
		}),
		new ExtractTextPlugin('[name].css', {allChunks: true}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	],
	optimization: {
    minimizer: [
      new UglifyJsPlugin({ sourceMap: true })
		]
  }
};