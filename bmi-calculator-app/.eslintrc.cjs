module.exports = {
	root: true,
	env: { browser: true, es2020: true, "jest/globals": true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"plugin:react/recommended",
		"plugin:jest/recommended",
		"airbnb",
		"prettier",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	settings: { react: { version: "18.2" } },
	plugins: ["react-refresh", "react", "jest"],
	rules: {
		"no-underscore-dangle": 0,
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				js: "always",
				jsx: "always",
			},
		],
		"react/jsx-no-target-blank": "off",
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
	},
};
