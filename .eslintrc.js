module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        "@nuxtjs/eslint-config-typescript",
        "plugin:nuxt/recommended",
        "plugin:prettier/recommended",
    ],
    plugins: ["vue", "prettier"],
    // add your custom rules here
    rules: {
        "prettier/prettier": "warn",
    },
};
