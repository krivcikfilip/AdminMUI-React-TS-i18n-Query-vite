module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 676b8ab (Updated structure)
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:cypress/recommended',
<<<<<<< HEAD
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
=======
>>>>>>> 676b8ab (Updated structure)
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['simple-import-sort', 'react-hooks'],
    rules: {
<<<<<<< HEAD
        "simple-import-sort/imports": "error",
        "mui-path-imports/mui-path-imports": "error",
        "react/react-in-jsx-scope": "off",
>>>>>>> bdd0d6c (New structure)
=======
        'simple-import-sort/imports': 'error',
        'react/react-in-jsx-scope': 'off',
>>>>>>> 676b8ab (Updated structure)
    },
}
