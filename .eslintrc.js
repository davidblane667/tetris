module.exports = {
  root: true,
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/essential",
    "@vue/prettier",
    "@vue/typescript",
  ],
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "prefer-const": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-inferrable-types": [
      "error",
      {
        ignoreParameters: true,
        ignoreProperties: true,
      },
    ],
    "no-empty": ["error", { allowEmptyCatch: true }],
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};
