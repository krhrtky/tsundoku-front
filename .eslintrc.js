module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    "plugin:react/recommended"
  ],
  plugins: [
      'react',
      '@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  env: { node: true, es6: true },
  parserOptions: {
    sourceType: 'module',
    "ecmaFeatures": {
      "jsx": true  // react用
    }
  },
  rules: {
    semi: ['error', 'always'],
    'prettier/prettier': ['error', { singleQuote: true, semi: true }],
    '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    'react/prop-types': 'off'
  },
};