module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'tsc'],
  parser: '@typescript-eslint/parser',
  env: { node: true, es6: true },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['next.config.js', 'server.js'],
  rules: {
    semi: ['error', 'always'],
    'prettier/prettier': ['error', { singleQuote: true, semi: true }],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    'react/prop-types': 'off',
    'tsc/config': [
      'error',
      {
        configFile: 'tsconfig.json',
      },
    ],
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: '16.12',
    },
  },
};
