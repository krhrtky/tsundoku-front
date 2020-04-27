const { resolve } = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions/register'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [require.resolve('babel-preset-react-app')],
      },
    });

    config.resolve.alias = {
      '@': resolve(__dirname, '../src'),
    };

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  }
};
