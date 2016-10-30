module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
		node: true,
	},
	extends: [
		"./possible-errors.js",
		"./best-practices.js",
		"./variables.js",
		"./commonjs.js",
		"./stylistic.js",
		"./es6.js",
	],
	parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
		},
		ecmaVersion: 6,
		sourceType: "module",
	},
	plugins: ["babel"],
	rules: {},
}
