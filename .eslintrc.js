module.exports = {
	settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	plugins: ['github', 'regexp'],
	extends: [
		'eslint:recommended',
		'plugin:listeners/recommended',
		'plugin:github/recommended',
		'@fullstacksjs',
		'@fullstacksjs/eslint-config/typecheck',
		'plugin:regexp/recommended',
		'plugin:security/recommended',
	],
	parserOptions: {
		project: './tsconfig.eslint.json',
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				arrowParens: 'always',
				bracketSpacing: true,
				bracketSameLine: false,
				endOfLine: 'auto',
				htmlWhitespaceSensitivity: 'css',
				insertPragma: false,
				jsxSingleQuote: false,
				printWidth: 140,
				proseWrap: 'always',
				quoteProps: 'consistent',
				requirePragma: false,
				semi: true,
				singleQuote: true,
				tabWidth: 3,
				useTabs: true,
				trailingComma: 'all',
			},
		],
	},
};
