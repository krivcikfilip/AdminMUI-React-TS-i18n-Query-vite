module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
<<<<<<< HEAD
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:cypress/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['mui-path-imports', 'simple-import-sort', 'react-hooks'],
    rules: {
        'simple-import-sort/imports': 'error',
        'mui-path-imports/mui-path-imports': 'error',
        'react/react-in-jsx-scope': 'off',
=======
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:cypress/recommended",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["mui-path-imports", "simple-import-sort", "react-hooks"],
    rules: {
        "simple-import-sort/imports": "error",
        "mui-path-imports/mui-path-imports": "error",
        "react/react-in-jsx-scope": "off",
>>>>>>> bdd0d6c (New structure)
    },
}
