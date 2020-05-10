/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// const defaultTheme = require("tailwindcss/defaultTheme");
const indentTheme = require("tailwindcss-text-indent");

module.exports = {
	theme: {
		extend: {},
		textIndent: (theme, { negative }) => ({
			...{
				// sm: '2rem',
				// md: '3rem',
				// lg: '4rem',
			},
			...negative({
				// sm: '2rem',
				// md: '3rem',
				// lg: '4rem',
			}),
		}),
	},
	variants: {
		textIndent: ['responsive'],
	},
	plugins: [
		indentTheme(),
	],
};
