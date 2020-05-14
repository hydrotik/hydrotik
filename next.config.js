/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const purgecss = require('@fullhuman/postcss-purgecss');
const optimizedImages = require('next-optimized-images');
const withSass = require('@zeit/next-sass');

const isProd = (process.env.NODE_ENV || 'production') === 'production';
const isGHProd = (process.env.GHPAGES_ENV) === 'true';
const isZeit = (process.env.ZEIT_ENV) === 'true';
const assetPrefix = ((isProd && isZeit) || !isProd) ? '' : '/hydrotik';

console.log(`production: ${isProd}`);
console.log(`GH Pages: ${isGHProd}`);
console.log(`ZEIT: ${isZeit}`);

module.exports = {
	'process.env.BACKEND_URL': assetPrefix,
	exportPathMap: () => ({
		'/': { page: '/' },
		'/about': { page: '/about' },
		'/visualization': { page: '/visualization' },
		'/terms': { page: '/terms' },
		'/privacy': { page: '/privacy' },

	}),
	assetPrefix,
	webpack(config, { dev, isServer }) {
		config.plugins.push(
			new webpack.DefinePlugin({
				'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
				'process.env.IS_GITHUBPAGES': isGHProd,
				'process.env.BACKEND_URL': JSON.stringify(assetPrefix),
			}),
		);
		config.module.rules.push({
			test: /\.(ts|tsx|js|jsx)$/,
			enforce: 'pre',
			exclude: /node_modules/,
			use: [
				{
					loader: 'eslint-loader',
					options: {
						emitWarning: !isProd,
					},
				},
			],
		});
		// const splitChunks = config.optimization && config.optimization.splitChunks;
		// if (splitChunks) {
		// 	const { cacheGroups } = splitChunks;
		// 	const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;
		// 	if (cacheGroups.framework) {
		// 		cacheGroups.preact = {
		// 			...cacheGroups.framework,
		// 			test: preactModules,
		// 		};

		// 		cacheGroups.commons.name = 'framework';
		// 	} else {
		// 		cacheGroups.preact = {
		// 			name: 'commons',
		// 			chunks: 'all',
		// 			test: preactModules,
		// 		};
		// 	}
		// }

		// // Install webpack aliases:
		// const aliases = config.resolve.alias || (config.resolve.alias = {});
		// aliases.react = aliases['react-dom'] = 'preact/compat';

		// // inject Preact DevTools
		// if (dev && !isServer) {
		// 	const { entry } = config;
		// 	config.entry = () => entry().then((entries) => {
		// 		entries['main.js'] = ['preact/debug'].concat(entries['main.js'] || []);
		// 		return entries;
		// 	});
		// }
		return config;
	},
};
