module.exports =  {
    plugins: ["prettier", "import", "@typescript-eslint", "jest"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended", "prettier"],
    env: {
        browser: true,
        es2021: true,
        node: true,
        jasmine: true,
        'jest/globals': true
    },
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
    },
    rules: {
        "no-debugger": "off",
        "no-console": 0,
        "class-methods-use-this": "off",
        "@typescript-eslint/no-explicit-any": 2,
        "@typescript-eslint/no-inferrable-types": "off",
    },
};
