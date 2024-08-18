module.exports = {
    extends: ['../../.eslintrc.js'],
    plugins: ['mui-path-imports', 'eslint-plugin-paths'],
    rules: {
        'paths/alias': 'error',
        'mui-path-imports/mui-path-imports': 'error',
    },
}
