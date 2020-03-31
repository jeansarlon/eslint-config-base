module.exports = {
  env: {
    node: true
  },
  rules: {
    // Require all requires be top-level
    // https://github.com/eslint/eslint/blob/master/docs/rules/global-require.md
    'global-require': 'error',

    // Enforces error handling in callbacks (node environment)
    // https://github.com/eslint/eslint/blob/master/docs/rules/handle-callback-err.md
    'handle-callback-err': 'error',

    // Disallow use of the Buffer() constructor
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-buffer-constructor.md
    'no-buffer-constructor': 'error',

    // Disallow mixing regular variable and require declarations
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-mixed-requires.md
    'no-mixed-requires': ['error', false],

    // disallow use of new operator with the require function
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-new-require.md
    'no-new-require': 'error',

    // Disallow string concatenation with __dirname and __filename
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-path-concat.md
    'no-path-concat': 'error'
  }
}
