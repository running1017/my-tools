module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {},
}
