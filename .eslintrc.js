module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:import/recommended"
    ],
    "overrides": [],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "import"
    ],
    "rules": {
        "indent": ["warn", 4, { "SwitchCase": 1 }],
        "linebreak-style": ["warn", "windows"],
        "quotes": ["error", "double"],
        "semi": ["error", "never"],
        "no-undef": "error",
        "no-unused-vars": "warn",
        "import/no-unresolved": ["error", { "commonjs": true, "amd": true }]
    }
}
