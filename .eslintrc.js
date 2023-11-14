module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  rules: {
    // Add any project-specific rules or overrides here
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    // 'react-native/no-inline-styles': `on`,
    // 'react/react-in-jsx-scope': 'on',
    // 'react-native/sort-styles': 'on',
    '@typescript-eslint/explicit-function-return-type': 'on',
    '@typescript-eslint/no-unused-vars': 'error',
    'react-native/no-color-literals': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
        rootPathPrefix: '~',
      },
    },
  },
};
