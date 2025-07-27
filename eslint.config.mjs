import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        rules: {
            // '@typescript-eslint/ban-ts-comment': 'warn',
            // '@typescript-eslint/no-empty-object-type': 'warn',
            // '@typescript-eslint/no-explicit-any': 'warn',
            // '@typescript-eslint/no-unused-vars': [
            //     'off',
            //     {
            //         vars: 'all',
            //         args: 'after-used',
            //         ignoreRestSiblings: false,
            //         argsIgnorePattern: '^_',
            //         varsIgnorePattern: '^_',
            //         destructuredArrayIgnorePattern: '^_',
            //         caughtErrorsIgnorePattern: '^(_|ignore)',
            //     },
            // ],
            '@typescript-eslint/no-unused-vars': ['off'],
            '@typescript-eslint/no-empty-object-type': ['off'],
            '@next/next/no-html-link-for-pages': ['off'],
            '@next/next/no-img-element': ['off'],
            'react-hooks/exhaustive-deps': ['off'],
            'prefer-const': ['off'],
        },
    },
    {
        ignores: ['.next/'],
    },
]

export default eslintConfig
