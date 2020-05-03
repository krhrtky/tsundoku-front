// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withPlugins } = require('next-compose-plugins');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withSourceMaps = require('@zeit/next-source-maps');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

const nextConfig = {
  env: {
    ...firebaseConfig
  },
  publicRuntimeConfig: {
    firebaseConfig
  },
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  webpack: config => {
    config.resolve.alias['@'] = path.resolve(`${__dirname}/src`);
    return config;
  }
};

module.exports = withPlugins(
  [[withSourceMaps], [withBundleAnalyzer]],
  nextConfig
);
