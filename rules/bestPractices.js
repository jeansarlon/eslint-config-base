module.exports = {
  rules: {
    // Enforces return statements in callbacks of array's methods
    // https://github.com/eslint/eslint/blob/master/docs/rules/array-callback-return.md
    'array-callback-return': 'error',

    // Enforce that class methods use "this"
    // https://github.com/eslint/eslint/blob/master/docs/rules/class-methods-use-this.md
    'class-methods-use-this': 'error',

    // Specify curly brace conventions for all control statements
    // https://github.com/eslint/eslint/blob/master/docs/rules/curly.md
    'curly': ['error', 'multi-line', 'consistent'],

    // Encourages use of dot notation whenever possible
    // https://github.com/eslint/eslint/blob/master/docs/rules/dot-notation.md
    'dot-notation': 'error',

    // Enforces consistent newlines before or after dots
    // https://github.com/eslint/eslint/blob/master/docs/rules/dot-location.md
    'dot-location': ['error', 'property'],

    // Require the use of === and !==
    // https://github.com/eslint/eslint/blob/master/docs/rules/eqeqeq.md
    'eqeqeq': ['error', 'always', { null: 'ignore' }],

    // Disallow the use of alert, confirm, and prompt
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-alert.md
    'no-alert': 'error',

    // Disallow lexical declarations in case/default clauses
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-case-declarations.md
    'no-case-declarations': 'error',

    // Disallow else after a return in an if
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-else-return.md
    'no-else-return': ['error', { allowElseIf: false }],

    // Disallow empty destructuring patterns
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-empty-pattern.md
    'no-empty-pattern': 'error',

    // Disallow use of eval()
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-eval.md
    'no-eval': 'error',

    // Disallow adding to native types
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-extend-native.md
    'no-extend-native': 'error',

    // Disallow unnecessary function binding
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-extra-bind.md
    'no-extra-bind': 'error',

    // Disallow fallthrough of case statements
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-fallthrough.md
    'no-fallthrough': 'error',

    // Disallow the use of leading or trailing decimal points in numeric literals
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-floating-decimal.md
    'no-floating-decimal': 'error',

    // Disallow reassignments of native objects or read-only globals
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-global-assign.md
    'no-global-assign': ['error', { exceptions: [] }],

    // Disallow unnecessary nested blocks
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-lone-blocks.md
    'no-lone-blocks': 'error',

    // Disallow creation of functions within loops
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-loop-func.md
    'no-loop-func': 'error',

    // Disallow use of multiple spaces
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-multi-spaces.md
    'no-multi-spaces': ['error', {
      ignoreEOLComments: false
    }],

    // Disallow reassignment of function parameters
    // Disallow parameter object manipulation except for specific exclusions
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-param-reassign.md
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: ['acc', 'e', 'ctx', 'req', 'request', 'res', 'response', '$scope']
    }],

    // Disallow declaring the same variable more then once
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-redeclare.md
    'no-redeclare': 'error',

    // Disallow certain object properties
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-restricted-properties.md
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    }],

    // Disallow use of assignment in return statement
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-return-assign.md
    'no-return-assign': ['error', 'always'],

    // Disallow use of `javascript:` urls.
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-script-url.md
    'no-script-url': 'error',

    // Disallow self assignment
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-self-assign.md
    'no-self-assign': 'error',

    // Disallow comparisons where both sides are exactly the same
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-self-compare.md
    'no-self-compare': 'error',

    // Disallow use of comma operator
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-sequences.md
    'no-sequences': 'error',

    // Restrict what can be thrown as an exception
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-throw-literal.md
    'no-throw-literal': 'error',

    // Disallow useless string concatenation
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-useless-concat.md
    'no-useless-concat': 'error',

    // Disallow unnecessary string escaping
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-useless-escape.md
    'no-useless-escape': 'error',

    // Disallow redundant return; keywords
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-useless-return.md
    'no-useless-return': 'error',

    // Disallow use of void operator
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-void.md
    'no-void': 'error',

    // Disallow use of the with statement
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-with.md
    'no-with': 'error',

    // Require using Error objects as Promise rejection reasons
    // https://github.com/eslint/eslint/blob/master/docs/rules/prefer-promise-reject-errors.md
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // Requires to declare all vars on top of their containing scope
    // https://github.com/eslint/eslint/blob/master/docs/rules/vars-on-top.md
    'vars-on-top': 'error',

    // Require immediate function invocation to be wrapped in parentheses
    // https://github.com/eslint/eslint/blob/master/docs/rules/wrap-iife.md
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

    // Require or disallow Yoda conditions
    // https://github.com/eslint/eslint/blob/master/docs/rules/yoda.md
    yoda: 'error'
  }
}
