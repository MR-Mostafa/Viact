import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		mkcert({
			source: 'coding',
		}),
	],
	cacheDir: './.vite-cache',
	resolve: {
		alias: {
			'@src': resolve(__dirname, 'src'),
			'@components': resolve(__dirname, 'src', 'components'),
			'@hooks': resolve(__dirname, 'src', 'hooks'),
			'@api': resolve(__dirname, 'src', 'api'),
			'@store': resolve(__dirname, 'src', 'store'),
			'@images': resolve(__dirname, 'src', 'assets', 'images'),
			'@styles': resolve(__dirname, 'src', 'assets', 'styles'),
			'@fonts': resolve(__dirname, 'src', 'assets', 'fonts'),
			'@utils': resolve(__dirname, 'src', 'utils'),
			'@pages': resolve(__dirname, 'src', 'pages'),
			'@constants': resolve(__dirname, 'src', 'constants'),
			'@containers': resolve(__dirname, 'src', 'containers'),
			'@types': resolve(__dirname, 'src', 'types'),
		},
	},
	envDir: resolve(__dirname, 'src', 'env'),
	envPrefix: 'GB_',
	server: {
		https: true,
	},
});
