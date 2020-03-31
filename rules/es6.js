module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    // Require parens in arrow function arguments
    // https://github.com/eslint/eslint/blob/master/docs/rules/arrow-parens.md
    'arrow-parens': ['error','always'],

    // Require space before/after arrow function's arrow
    // https://github.com/eslint/eslint/blob/master/docs/rules/arrow-spacing.md
    'arrow-spacing': 'error',

    // Verify super() callings in constructors
    // https://github.com/eslint/eslint/blob/master/docs/rules/constructor-super.md
    'constructor-super': 'error',

    // Enforce the spacing around the * in generator functions
    // https://github.com/eslint/eslint/blob/master/docs/rules/generator-star-spacing.md
    'generator-star-spacing': 'error',

    // Disallow modifying variables of class declarations
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-class-assign.md
    'no-class-assign': 'error',

    // Disallow modifying variables that are declared using const
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-const-assign.md
    'no-const-assign': 'error',

    // Disallow duplicate class members
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-dupe-class-members.md
    'no-dupe-class-members': 'error',

    // Disallow to use this/super before super() calling in constructors.
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-this-before-super.md
    'no-this-before-super': 'error',

    // Disallow useless computed property keys
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-useless-computed-key.md
    'no-useless-computed-key': 'error',

    // Disallow unnecessary constructor
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-useless-constructor.md
    'no-useless-constructor': 'error',

    // Require let or const instead of var
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-var.md
    'no-var': 'error',

    // Require method and property shorthand syntax for object literals
    // https://github.com/eslint/eslint/blob/master/docs/rules/object-shorthand.md
    'object-shorthand': ['error','always'],

    // Suggest using arrow functions as callbacks
    // https://github.com/eslint/eslint/blob/master/docs/rules/prefer-arrow-callback.md
    'prefer-arrow-callback': 'error',

    // Suggest using of const declaration for variables that are never modified after declared
    // https://github.com/eslint/eslint/blob/master/docs/rules/prefer-const.md
    'prefer-const': 'error',

    // Use rest parameters instead of arguments
    // https://github.com/eslint/eslint/blob/master/docs/rules/prefer-rest-params.md
    'prefer-rest-params': 'error',

    // Suggest using the spread operator instead of .apply()
    // https://github.com/eslint/eslint/blob/master/docs/rules/prefer-spread.md
    'prefer-spread': 'error',

    // Suggest using template literals instead of string concatenation
    // https://github.com/eslint/eslint/blob/master/docs/rules/prefer-template.md
    'prefer-template': 'error',

    // Enforce spacing between object rest-spread
    // https://github.com/eslint/eslint/blob/master/docs/rules/rest-spread-spacing.md
    'rest-spread-spacing': ['error', 'never'],

    // Require a Symbol description
    // https://github.com/eslint/eslint/blob/master/docs/rules/symbol-description.md
    'symbol-description': 'error',

    // Enforce usage of spacing in template strings
    // https://github.com/eslint/eslint/blob/master/docs/rules/template-curly-spacing.md
    'template-curly-spacing': ['error', 'never'],

    // Enforce spacing around the * in yield* expressions
    // https://github.com/eslint/eslint/blob/master/docs/rules/yield-star-spacing.md
    'yield-star-spacing': ['error', 'before']
  }
}
