import next from '@next/eslint-plugin-next'
import reactRecommended from 'eslint-plugin-react/configs/recommended.js'
import typescriptParser from '@typescript-eslint/parser'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'

const baseConfig = {
  files: ['**/*.ts', '**/*.tsx'],
  plugins: {
    react: reactRecommended.plugins.react,
    '@typescript-eslint': typescriptPlugin,
    '@next/next': next
  },
  rules: {
    ...reactRecommended.rules,
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off', 
    'react/jsx-uses-react': 'off',
    ...typescriptPlugin.configs.recommended.rules,
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    ...next.configs.recommended.rules,
    '@next/next/no-img-element': 'warn'
  },
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      project: './tsconfig.json'
    },
    globals: {
      React: true,
      JSX: true
    }
  },
  settings: {
    react: {
      version: '18.2.0'
    },
    next: {
      rootDir: true
    }
  }
}

export default [baseConfig]
