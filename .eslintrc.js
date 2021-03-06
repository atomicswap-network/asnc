module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier', 'eslint-plugin-tsdoc', 'simple-import-sort'],
  // add your custom rules here
  rules: {
  	'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
        },
      },
    ],
  	'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
      },
    ],
    'tsdoc/syntax': 'error',
    'simple-import-sort/sort': 'error',
  },
}
