/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins')
const withLess = require('next-with-less')

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
}

const lessVariablesOverrides = path.resolve(__dirname, 'src', 'styles', 'variables.less')

const plugins = [
  [withLess, {
    lessLoaderOptions: {
      javascriptEnabled: true,
      additionalData: (content) => `${content}\n\n@import '${lessVariablesOverrides}'`
    }
  }]
]

module.exports = withPlugins(plugins, nextConfig)
