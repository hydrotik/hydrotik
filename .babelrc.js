const env = require('./next.config')

module.exports = {
  presets: ['next/babel'],
  plugins: [['transform-define', env]],
}