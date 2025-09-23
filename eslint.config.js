import globals from "globals";

export default [
  {
    files: ["*.js"], // apply to all JS files
    languageOptions: {
      globals: {
        ...globals.node,   // Node globals
        ...globals.browser // Browser globals if needed
      },
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: "module"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "semi": ["error", "always"],
      // add more rules here
    }
  }
];
