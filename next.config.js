// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withSourceMaps = require('@zeit/next-source-maps');

module.exports = withSourceMaps({
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  webpack: config => {
    config.resolve.alias['@'] = path.resolve(`${__dirname}/components`);
    return config;
  }
});
