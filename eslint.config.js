// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';
import jestPlugin from 'eslint-plugin-jest';

export default [

  { ignores: ['coverage', 'dist', 'node_modules'] },


  {
    files: ['src/**/*.js'],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.node },
    },
  },


  {
    files: [
      '**/__tests__/**/*.js',
      '**/*.test.js',
    ],
  
    ...jestPlugin.configs['flat/recommended'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
 
      globals: { ...globals.node, ...globals.jest },
    },
  },
];

