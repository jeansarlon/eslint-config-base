module.exports = {
  rules: {
    // Disallow deletion of variables
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-delete-var.md
    'no-delete-var': 'error',

    // Disallow labels that share a name with a variable
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-label-var.md
    'no-label-var': 'error',

    // Disallow declaration of variables already declared in the outer scope
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-shadow.md
    'no-shadow': 'error',

    // Disallow shadowing of names such as arguments
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-shadow-restricted-names.md
    'no-shadow-restricted-names': 'error',

    // Disallow use of undeclared variables unless mentioned in a /*global */ block
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-undef.md
    'no-undef': 'error',

    // Disallow use of undefined when initializing variables
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-undef-init.md
    'no-undef-init': 'error',

    // Disallow use of undefined variable
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-undefined.md
    'no-undefined': 'off',

    // Disallow declaration of variables that are not used in the code
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-unused-vars.md
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
  }
}
