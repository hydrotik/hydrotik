const webpack = require('webpack')
const purgecss = require('@fullhuman/postcss-purgecss')

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const assetPrefix = isProd ? '/hydrotik' : ''

module.exports = {
  'process.env.BACKEND_URL': assetPrefix,
  exportPathMap: () => ({
    '/': { page: '/' },
    '/about': { page: '/about' },
  }),
  assetPrefix: assetPrefix,
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    )

    return config
  },
}
