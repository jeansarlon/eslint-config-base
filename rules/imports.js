module.exports = {
  plugins: [
    'import'
  ],
  rules: {
    // If a default import is requested, this rule will report if there is no default export in the imported module.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
    'import/default': 2,

    // Forbid the import of external modules that are not declared
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': 'error',

    // Ensure imports point to files/modules that can be resolved
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

    // Ensure named imports coupled with named exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
    'import/named': 'error',

    // Disallow invalid exports, e.g. multiple defaults
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
    'import/export': 'error',

    // Disallow duplicate imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': 'error',

    // Forbid mutable exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': 'error',

    // Disallow non-import statements appearing before import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
    'import/first': ['error', 'absolute-first'],

    // Require a newline after the last import/require in a group
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/newline-after-import': 'error',

    // Forbid import of modules using absolute paths
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
    'import/no-absolute-path': 'error',

    // Prevent importing the default as if it were named
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
    'import/no-named-default': 'error',

    // Enforce a convention in the order of require() / import statements.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': ['error', { 'newlines-between': 'never' }]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json']
      }
    },
    'import/ignore': [
      'node_modules',
      '\\.(|scss|css|less|svg)$'
    ]
  }
}
