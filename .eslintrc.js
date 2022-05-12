module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  parserOptions: {
    project: './tsconfig.eslint.json'
  },
  plugins: ['github', 'regexp'],
  extends: ['eslint:recommended', 'plugin:listeners/recommended', 'plugin:github/recommended', 'plugin:regexp/recommended', 'plugin:security/recommended', '@fullstacksjs', '@fullstacksjs/eslint-config/typecheck', 'plugin:storybook/recommended'],
  rules: {
    'prettier/prettier': ['error', {}, {
      usePrettierrc: true
    }]
  }
};