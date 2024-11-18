import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.node,  // Define os globais do Node.js
      parserOptions: {
        ecmaVersion: 2021,  // Define a versão do ECMAScript
        sourceType: 'module',  // Permite o uso de módulos ES6
      },
    },
    // Adiciona configurações recomendadas para JavaScript
    ...pluginJs.configs.recommended,
  },
  {
    // Se você usar o React, pode adicionar uma configuração para React também
    languageOptions: {
      globals: {
        ...globals.node,
        React: 'readonly',  // Declara o React como global para JSX
      },
    },
    extends: ['airbnb-base', 'prettier'],
    plugins:['prettier'],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      // Você pode adicionar regras personalizadas aqui
      'react/prop-types': 'off',
      'prettier/prettier': 'error'  // Exemplo de regra do React
    },
  },
];
