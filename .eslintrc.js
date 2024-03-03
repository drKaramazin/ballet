module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'standard-with-typescript',
  overrides: [{
    files: ['*.ts'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': ['error', {
        allowExpressions: true,
      }],
    },
  }],
  parserOptions: {
    project: './tsconfig.linter.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'always'],
    '@typescript-eslint/semi': 'off',
    'padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'always' }],
    'space-before-function-paren': ['error', 'never'],
    '@typescript-eslint/space-before-function-paren': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-extraneous-class': ['error', { allowStaticOnly: true }],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
      multilineDetection: 'brackets',
    }],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'no-var': 'error',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' }],
    '@typescript-eslint/restrict-template-expressions': 'off',
    'multiline-ternary': 'off',
  },
};
