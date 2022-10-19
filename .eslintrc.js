module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'linebreak-style': 'off',
    'import/no-unresolved': 0,
    'import/extensions': 0,
  },
};
