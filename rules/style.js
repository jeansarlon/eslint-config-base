module.exports = {
  rules: {
    // Enforce line breaks after opening and before closing array brackets
    // https://github.com/eslint/eslint/blob/master/docs/rules/array-bracket-newline.md
    'array-bracket-newline': ['error', 'consistent'],

    // enforce line breaks between array elements
    // https://github.com/eslint/eslint/blob/master/docs/rules/array-element-newline.md
    'array-element-newline': ['error', 'consistent'],

    // Enforce spacing inside array brackets
    // https://github.com/eslint/eslint/blob/master/docs/rules/array-bracket-spacing.md
    'array-bracket-spacing': ['error', 'never'],

    // Enforce spacing inside single-line blocks
    // https://github.com/eslint/eslint/blob/master/docs/rules/block-spacing.md
    'block-spacing': ['error', 'always'],

    // Enforce one true brace style
    // https://github.com/eslint/eslint/blob/master/docs/rules/brace-style.md
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // Require camel case names
    // https://github.com/eslint/eslint/blob/master/docs/rules/camelcase.md
    'camelcase': ['error', { properties: 'never' }],

    // Enforces consistent use of trailing commas in object and array literals
    // https://github.com/eslint/eslint/blob/master/docs/rules/comma-dangle.md
    'comma-dangle': ['error', 'never'],

    // Enforce spacing before and after comma
    // https://github.com/eslint/eslint/blob/master/docs/rules/comma-spacing.md
    'comma-spacing': ['error', { before: false, after: true }],

    // Enforce one true comma style
    // https://github.com/eslint/eslint/blob/master/docs/rules/comma-style.md
    'comma-style': ['error', 'last'],

    // Limits cyclomatic complexity
    // https://github.com/eslint/eslint/blob/master/docs/rules/complexity.md
    'complexity': ['error', { 'max': 4 }],

    // Disallow padding inside computed properties
    // https://github.com/eslint/eslint/blob/master/docs/rules/computed-property-spacing.md
    'computed-property-spacing': ['error', 'never'],

    // Enforce newline at the end of file, with no multiple empty lines
    // https://github.com/eslint/eslint/blob/master/docs/rules/eol-last.md
    'eol-last': ['error', 'always'],

    // Enforce spacing between functions and their invocations
    // https://github.com/eslint/eslint/blob/master/docs/rules/func-call-spacing.md
    'func-call-spacing': ['error', 'never'],

    // Enforce consistent line breaks inside function parentheses
    // https://github.com/eslint/eslint/blob/master/docs/rules/function-paren-newline.md
    'function-paren-newline': ['error', 'consistent'],

    // This option sets a specific tab width for your code
    // https://github.com/eslint/eslint/blob/master/docs/rules/indent.md
    'indent': ['error', 2, { "SwitchCase": 1 }],

    // Enforces spacing between keys and values in object literal properties
    // https://github.com/eslint/eslint/blob/master/docs/rules/key-spacing.md
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // Require a space before & after certain keywords
    // https://github.com/eslint/eslint/blob/master/docs/rules/keyword-spacing.md
    'keyword-spacing': ['error', { before: true, after: true }],

    // Disallow mixed 'LF' and 'CRLF' as linebreaks
    // https://github.com/eslint/eslint/blob/master/docs/rules/linebreak-style.md
    'linebreak-style': ['error', 'unix'],

    // Require or disallow an empty line between class members
    // https://github.com/eslint/eslint/blob/master/docs/rules/lines-between-class-members.md
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

    // Specify the maximum depth that blocks can be nested
    // https://github.com/eslint/eslint/blob/master/docs/rules/max-depth.md
    'max-depth': ['off', 2],

    // specify the maximum length of a line in your program
    // https://github.com/eslint/eslint/blob/master/docs/rules/max-len.md
    'max-len': ['error', 125, 2, {
      ignoreUrls: true,
      ignoreRegExpLiterals: true,
      ignorePattern: "^import\\s.*\\sfrom\\s.*$"
    }],

    // Restrict the number of statements per line
    // https://github.com/eslint/eslint/blob/master/docs/rules/max-statements-per-line.md
    'max-statements-per-line': ['error', { max: 1 }],

    // Require a capital letter for constructors
    // https://github.com/eslint/eslint/blob/master/docs/rules/new-cap.md
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],

    // Disallow the omission of parentheses when invoking a constructor with no arguments
    // https://github.com/eslint/eslint/blob/master/docs/rules/new-parens.md
    'new-parens': 'error',

    // Enforces new line after each method call in the chain to make it more readable and easy to maintain
    // https://github.com/eslint/eslint/blob/master/docs/rules/newline-per-chained-call.md
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // Disallow use of the Array constructor
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-array-constructor.md
    'no-array-constructor': 'error',

    // Disallow use of bitwise operators
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-bitwise.md
    'no-bitwise': 'error',

    // Disallow use of the continue statement
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-continue.md
    'no-continue': 'error',

    // Disallow if as the only statement in an else block
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-lonely-if.md
    'no-lonely-if': 'error',

    // Disallow mixed spaces and tabs for indentation
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-mixed-spaces-and-tabs.md
    'no-mixed-spaces-and-tabs': 'error',

    // disallow use of chained assignment expressions
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-multi-assign.md
    'no-multi-assign': ['error'],

    // Disallow multiple empty lines and only one newline at the end
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-multiple-empty-lines.md
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],

    // Disallow negated conditions
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-negated-condition.md
    'no-negated-condition': 'error',

    // Disallow nested ternary expressions
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-nested-ternary.md
    'no-nested-ternary': 'error',

    // Disallow use of the Object constructor
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-new-object.md
    'no-new-object': 'error',

    // Disallow tab characters entirely
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-tabs.md
    'no-tabs': 'error',

    // Disallow trailing whitespace at the end of lines
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-trailing-spaces.md
    'no-trailing-spaces': 'error',

    // Disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-unneeded-ternary.md
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // Disallow whitespace before properties
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-whitespace-before-property.md
    'no-whitespace-before-property': 'error',

    // Enforce the location of single-line statements
    // https://github.com/eslint/eslint/blob/master/docs/rules/nonblock-statement-body-position.md
    'nonblock-statement-body-position': ['error', 'beside'],

    // Require padding inside curly braces
    // https://github.com/eslint/eslint/blob/master/docs/rules/object-curly-spacing.md
    'object-curly-spacing': ['error', 'always'],

    // enforce 'same line' or 'multiple line' on object properties.
    // https://github.com/eslint/eslint/blob/master/docs/rules/object-property-newline.md
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],

    // Allow just one var statement per function
    // https://github.com/eslint/eslint/blob/master/docs/rules/one-var.md
    'one-var': ['error', { var: 'always', let: 'always', const: 'never' }],

    // Require a newline around variable declaration
    // https://github.com/eslint/eslint/blob/master/docs/rules/one-var-declaration-per-line.md
    'one-var-declaration-per-line': ['error', 'always'],

    // Require assignment operator shorthand where possible or prohibit it entirely
    // https://github.com/eslint/eslint/blob/master/docs/rules/operator-assignment.md
    'operator-assignment': ['error', 'always'],

    // Requires operator at the beginning of the line in multiline statements
    // https://github.com/eslint/eslint/blob/master/docs/rules/operator-linebreak.md
    'operator-linebreak': ['error', 'before'],

    // Disallow padding within blocks
    // https://github.com/eslint/eslint/blob/master/docs/rules/padded-blocks.md
    'padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }],

    // Require quotes around object literal property names
    // https://github.com/eslint/eslint/blob/master/docs/rules/quote-props.md
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: true }],

    // Specify whether double or single quotes should be used
    // https://github.com/eslint/eslint/blob/master/docs/rules/quotes.md
    quotes: ['error', 'single', { avoidEscape: true }],

    // Require or disallow use of semicolons instead of ASI
    // https://github.com/eslint/eslint/blob/master/docs/rules/semi.md
    semi: ["error", "always", { "omitLastInOneLineBlock": true}],

    // enforce spacing before and after semicolons
    // https://github.com/eslint/eslint/blob/master/docs/rules/semi-spacing.md
    'semi-spacing': ['error', { before: false, after: true }],

    // Enforce location of semicolons
    // https://github.com/eslint/eslint/blob/master/docs/rules/semi-style.md
    'semi-style': ['error', 'last'],

    // Require or disallow space before blocks
    // https://github.com/eslint/eslint/blob/master/docs/rules/space-before-blocks.md
    'space-before-blocks': ['error', 'always'],

    // Require or disallow space before function opening parenthesis
    // https://github.com/eslint/eslint/blob/master/docs/rules/space-before-function-paren.md
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],

    // Require or disallow spaces inside parentheses
    // https://github.com/eslint/eslint/blob/master/docs/rules/space-in-parens.md
    'space-in-parens': ['error', 'never'],

    // Require spaces around operators
    // https://github.com/eslint/eslint/blob/master/docs/rules/space-infix-ops.md
    'space-infix-ops': 'error',

    // Require or disallow spaces before/after unary operators
    // https://github.com/eslint/eslint/blob/master/docs/rules/space-unary-ops.md
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false
    }],

    // Enforce spacing around colons of switch statements
    // https://github.com/eslint/eslint/blob/master/docs/rules/switch-colon-spacing.md
    'switch-colon-spacing': ['error', { after: true, before: false }],

    // Require or disallow spacing between template tags and their literals
    // https://github.com/eslint/eslint/blob/master/docs/rules/template-tag-spacing.md
    'template-tag-spacing': ['error', 'never'],

    // Require or disallow the Unicode Byte Order Mark
    // https://github.com/eslint/eslint/blob/master/docs/rules/unicode-bom.md
    'unicode-bom': ['error', 'never']
  }
}
