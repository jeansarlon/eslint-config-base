# eslint-config-base

This package provides base JS `.eslintrc` (without React plugins) as an extensible shared config.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires:
- `eslint`
- `eslint-plugin-import`

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "@jeansarlon/eslint-config-base@latest" peerDependencies
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev @jeansarlon/eslint-config-base eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

2. Add `extends: "@jeansarlon/eslint-config-base"` to your project's `.eslintrc`.
