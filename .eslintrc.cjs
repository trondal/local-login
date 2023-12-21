module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:import/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  ignorePatterns: [".eslintrc.cjs", "reset.d.ts"],
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint"],
  root: true,
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "import/order": [
      "error",
      { groups: ["builtin", "external", "internal", "parent", "sibling"] },
    ],
  },
};
