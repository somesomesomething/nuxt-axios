// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import importPlugin from 'eslint-plugin-import-x'

export default createConfigForNuxt({
  features: {
    tooling: true,
    stylistic: true,
  },
  dirs: {
    src: [
      './playground',
    ],
  },
}).append(
  {
    plugins: {
      'import-x': importPlugin,
    },
    rules: {
      '@typescript-eslint/no-invalid-void-type': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      'import-x/order': ['error', {
        'newlines-between': 'always',
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
      }],
    },
  },
)
