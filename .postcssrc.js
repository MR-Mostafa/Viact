module.exports = (ctx) => ({
	plugins: [require('autoprefixer'), require('./postcss/postcss-specific-file-rtl/lib/rtlcss')],
});
