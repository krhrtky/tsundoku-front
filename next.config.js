// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withPlugins } = require('next-compose-plugins');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withSourceMaps = require('@zeit/next-source-maps');

const nextConfig = {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  webpack: config => {
    config.resolve.alias['@'] = path.resolve(`${__dirname}/src`);
    return config;
  }
};

module.exports = withPlugins([[withSourceMaps]], nextConfig);
