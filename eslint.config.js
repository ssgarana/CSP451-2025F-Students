import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['eslint.config.js'], // ignore ESLint config itself
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      'no-unused-vars': ['warn', { args: 'none' }], // ignore unused function parameters
    },
  },
  js.configs.recommended,
];
