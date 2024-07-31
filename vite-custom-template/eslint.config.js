import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact, { rules } from "eslint-plugin-react";

export default [
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
    },
    {
        Plugin: {
            react: pluginReact,
        },
    },
    {
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    {
        rules: {
            "react/reat-in-jsx-scope": "off",
        },
    },

    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
];
