const webpack = require('webpack')
const purgecss = require('@fullhuman/postcss-purgecss')

const isProd = (process.env.NODE_ENV || 'production') === 'production'
const isGHProd = (process.env.GHPAGES_ENV) === 'true'
const isZeit = (process.env.ZEIT_ENV) === 'true'
const assetPrefix = (isProd && isZeit) ? '' : '/hydrotik'

console.log('production: ' + isProd);
console.log('GH Pages: ' + isGHProd);
console.log('ZEIT: ' + isZeit);

module.exports = {
  'process.env.BACKEND_URL': assetPrefix,
  exportPathMap: () => ({
    '/': { page: '/' },
    '/about': { page: '/about' },
    '/visualization': { page: '/visualization' },

  }),
  assetPrefix: assetPrefix,
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
        'process.env.IS_GITHUBPAGES' : isGHProd,
        'process.env.BACKEND_URL' : JSON.stringify(assetPrefix)
      }),
    )

    return config
  },
}