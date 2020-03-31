const rulesFiles = [
  './rules/bestPractices',
  './rules/errors',
  './rules/es6',
  './rules/imports',
  './rules/node',
  './rules/strict',
  './rules/style',
  './rules/variables'
]

module.exports = {
  extends: rulesFiles.map(require.resolve),
  parserOptions: {
    ecmaVersion: 9
  }
}
