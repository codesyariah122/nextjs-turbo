/** @type {import('next').NextConfig} */
require('dotenv').config;
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  swcMinify: true,
  experimental: {
    appDir: false,
    outputFileTracingRoot: path.join(__dirname, '../../'),
    transpilePackages: [''],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
