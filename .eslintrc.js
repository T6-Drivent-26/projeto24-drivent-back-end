module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    'no-console': 'error',
    'import/no-unresolved': 'error',
    'import/order': 'off',
    'import/no-named-as-default-member': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'import/newline-after-import': ['error'],
    'lines-between-class-members': ['error', 'always'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': { typescript: {}, node: {} },
  },
};
