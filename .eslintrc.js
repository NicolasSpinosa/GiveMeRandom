module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        '@react-native',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        indent: ["error", 4, {
            SwitchCase: 1,
        }],

        semi: ["error", "always"],

        "@typescript-eslint/no-unused-vars": ["warn", {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
        }],

        "@typescript-eslint/no-require-imports": "off",

        "prefer-const": "warn",
        "no-empty": "off",
    }
};
