module.exports = {
  rules: {
    // Enforce “for” loop update clause moving the counter in the right direction
    // https://github.com/eslint/eslint/blob/master/docs/rules/for-direction.md
    'for-direction': 'error',

    // Enforces that a return statement is present in property getters
    // https://github.com/eslint/eslint/blob/master/docs/rules/getter-return.md
    'getter-return': ['error', { allowImplicit: true }],

    // Require using Error objects as Promise rejection reasons
    // https://github.com/eslint/eslint/blob/master/docs/rules/prefer-promise-reject-errors.md
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // Disallow await inside of loops
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-await-in-loop.md
    'no-await-in-loop': 'error',

    // Disallows ambiguous assignment operators in test conditions of if, for, while, and do...while statements.
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-cond-assign.md
    'no-cond-assign': ['error', 'always'],

    // Disallows calls to methods of the console object
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-console.md
    'no-console': 'error',

    // This rule disallows constant expressions in the test condition of if, for, while, or do...while statement and ternary expression
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-constant-condition.md
    'no-constant-condition': 'error',

    // disallow control characters in regular expressions
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-control-regex.md
    'no-control-regex': 'error',

    // Disallows debugger statements.
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-debugger.md
    'no-debugger': 'error',

    // Disallows duplicate parameter names in function declarations or expressions
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-dupe-args.md
    'no-dupe-args': 'error',

    // Disallows duplicate keys in object literals
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-dupe-keys.md
    'no-dupe-keys': 'error',

    // Disallows duplicate test expressions in case clauses of switch statements
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-duplicate-case.md
    'no-duplicate-case': 'error',

    // Disallows empty block statements
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-empty.md
    'no-empty': 'error',

    // disallow the use of empty character classes in regular expressions
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-empty-character-class.md
    'no-empty-character-class': 'error',

    // Disallows unnecessary boolean casts
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-extra-boolean-cast.md
    'no-extra-boolean-cast': 'error',

    // Disallow overwriting functions written as function declarations
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-func-assign.md
    'no-func-assign': 'error',

    // Disallow invalid regular expression strings in the RegExp constructor
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-invalid-regexp.md
    'no-invalid-regexp': 'error',

    // Disallows invalid whitespace that is not a normal tab and space
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-irregular-whitespace.md
    'no-irregular-whitespace': 'error',

    // Disallows negating the left operand
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-unsafe-negation.md
    'no-obj-calls': 'error',

    // Disallow use of Object.prototypes builtins directly
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-prototype-builtins.md
    'no-prototype-builtins': 'error',

    // Disallow multiple spaces in a regular expression literal
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-regex-spaces.md
    'no-regex-spaces': 'error',

    // Avoid code that looks like two expressions but is actually one
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-unexpected-multiline.md
    'no-unexpected-multiline': 'error',

    // Disallow return/throw/break/continue inside finally blocks
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-unsafe-finally.md
    'no-unsafe-finally': 'error',

    // Disallows invalid whitespace that is not a normal tab and space
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-unsafe-negation.md
    'no-unsafe-negation': 'error',

    // Disallows unreachable code
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-unreachable.md
    'no-unreachable': 'error',

    // Disallows comparisons to 'NaN'
    // https://github.com/eslint/eslint/blob/master/docs/rules/use-isnan.md
    'use-isnan': 'error',

    // Enforces comparing typeof expressions to valid string literals
    // https://github.com/eslint/eslint/blob/master/docs/rules/valid-typeof.md
    'valid-typeof': 'error'
  }
}
