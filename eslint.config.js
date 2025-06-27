import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';
import pluginJs from '@eslint/js';
import globals from 'globals';
import unusedImports from 'eslint-plugin-unused-imports';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import plugin from '@next/eslint-plugin-next';
import react from 'eslint-plugin-react';
import { globalIgnores } from 'eslint/config';

/**
 * @type {import('eslint').Linter.Config}
 */
export default [
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: true,
    jsx: true,
  }),
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
  },
  globalIgnores(['src/migrations/**']),
  ...tseslint.configs.recommended,
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    plugins: {
      '@next/next': plugin,
      'react': react,
    },
  },
  {
    plugins: {
      'unused-imports': unusedImports,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/no-multiple-empty-lines': 'error',
      '@stylistic/brace-style': ['error', '1tbs'],
    },
  },
];
