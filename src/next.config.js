require('dotenv').config();
const Dotenv = require('dotenv-webpack');
const path = require('path');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: config => {
    config.plugins = [
      ...config.plugins,
      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];
    return config;
  },
});
