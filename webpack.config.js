var webpack = require('webpack');

module.exports = {
	entry: {
		main: [
			'./src/components/main.js'
		]
	},

	output: {
		filename: './public/[name].js'
	},
	module: {
		loaders: [
		{
			test: /\.jsx?$/,
			exclude: /node_modles/,
			loader: 'babel'
		}

		]
	}
}