/**
 * @Author: wangbo 3812943352@qq.com
 * @Date: 2024-12-25 15:07:38
 * @LastEditors: wangbo 3812943352@qq.com
 * @LastEditTime: 2024-12-27 09:19:09
 * @FilePath: eslint.config.mjs
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import prettier from 'eslint-plugin-prettier';
import imprt from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import { fixupPluginRules } from '@eslint/compat';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import fileName from 'eslint-plugin-filename-rules';
import sonarjs from 'eslint-plugin-sonarjs';
import globals from 'globals';

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    "plugin:prettier/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    // 'stylelint-config-standard'
    // "airbnb-typescript"
  ),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      prettier,
      imprt,
      react,
      '@typescript-eslint': tseslint.plugin,
      '@stylistic': stylistic,
      eslintPluginReactHooks,
      'filename-rules': fixupPluginRules(fileName),
      sonarjs,
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
      quotes: ['error', 'single'],
      'jsx-quotes': ['error', 'prefer-double'],
      'import/no-extraneous-dependencies': [
        0,
        {
          devDependencies: true,
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-filename-extension': [
        2,
        { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      ],

      'prettier/prettier': [
        'warn',
        {
          experimentalTernaries: false,
          printWidth: 70,
          tabWidth: 2,
          useTabs: false,
          semi: true,
          singleQuote: true,
          jsxSingleQuote: false,
          trailingComma: 'all',
          bracketSpacing: true,
          bracketSameLine: false,
          arrowParens: 'always',
          rangeStart: 0,
          proseWrap: 'preserve',
          htmlWhitespaceSensitivity: 'css',
          vueIndentScriptAndStyle: false,
          endOfLine: 'lf',
          embeddedLanguageFormatting: 'auto',
          singleAttributePerLine: false,
          plugins: ['prettier-plugin-tailwindcss'],
        },
      ],
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@typescript-eslint/no-shadow': 2,
      'sonarjs/cognitive-complexity': 'warn',
      'sonarjs/prefer-immediate-return': 0,
      'sonarjs/no-duplicate-string': 0,
      'sonarjs/no-nested-template-literals': 0,
      'sonarjs/no-redundant-jump': 0,
      'sonarjs/no-small-switch': 0,
      'import/no-cycle': [
        'warn',
        {
          ignoreExternal: true,
        },
      ],
      camelcase: 2,
      'no-nested-ternary': 1,
      curly: ['error', 'all'],
      'no-shadow': 0,
      'react/function-component-definition': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-underscore-dangle': 'off',
    },

    ignorePatterns: [
      '*.config.mjs',
      '*.config.js',
      'node_modules/**',
      'dist/**',
      '**/*.d.ts',
      '.DS_Store',
      '*.local',
    ],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: tseslint.parser,
        ecmaFeatures: {
          jsx: true,
        },
        parserOptions: {
          ecmaFeatures: { jsx: true },
          warnOnUnsupportedTypeScriptVersion: false,
        },
        globals: {
          ...globals.node,
          ...globals.browser,
          ...globals.es2022,
        },
      },
    },
    settings: {
      react: {
        version: "detect", // 自动检测 React 版本
      },
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest", // 指定ECMAScript 语法为最新
      sourceType: "module", // 指定代码为 ECMAScript 模块
      ecmaFeatures: {
        jsx: true, // 启用jsx
      },
      project: "./tsconfig.json",
    },
  },
];

export default eslintConfig;
