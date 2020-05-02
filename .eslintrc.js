module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier/react', 'prettier'],
  plugins: ['react', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error'],

    // More rules
    'linebreak-style': ['error', 'unix'],
    'prefer-const': 'error',
    'no-var': 'error',
    'no-console': 'warn',
    'no-unused-vars': ['error', { args: 'none' }],
    'spaced-comment': 'error',

    // React
    'react/jsx-filename-extension': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 'warn',
  },
};
