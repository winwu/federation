module.exports = {
    env: {
        node: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks'],
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    settings: {
        react: {
            // set for eslint-plugin-react, to detect the version of React in this project
            version: 'detect',
        },
    },
    rules: {
        '@typescript-eslint/class-name-casting': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-restricted-syntax': 'off',
        'no-use-before-define': 'off',
        'no-unused-vars': 'off',
        'no-params-reassign': 'off',
        'no-underscore-dangle': 'off',
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier': 'error',
        // add other rules here...
    },
};
