import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";



export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"]
  },
  {
    languageOptions: { globals: globals.browser }
  },
  // {
  //   plugins: {
  //     "js": pluginJs,
  //     "ts": tseslint,
  //   },
  // },
  {
    ignores: [".node_modules/*"]
  },
  {
    rules: {
      eqeqeq: "off",
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-undef": "error"
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];