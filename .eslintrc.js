module.exports = {
  extends: ["plugin:@typescript-eslint/recommended"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018, // 支持的 ECMAScript 版本
  },
  plugins: [],
  env: {
    browser: true,
  },
  rules: {},
  ignorePatterns: ["**/*.d.ts"],
};
