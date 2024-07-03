module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'prettier',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 'first',
        ignoredNodes: ['ConditionalExpression']
      }
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'never'],
    'no-duplicate-imports': ['error'],
    eqeqeq: ['error'],
    'no-console': ['warn'],
    'no-empty': ['error'],
    'no-empty-function': ['error'],
    'no-unneeded-ternary': ['error'],
    'no-var': ['error'],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'block-spacing': ['error', 'always'],
    'no-trailing-spaces': ['error'],
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/no-var-requires': 0,
    'prettier/prettier': 'error'
  }
}
