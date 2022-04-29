import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';
import legacy from '@vitejs/plugin-legacy';
import { visualizer } from 'rollup-plugin-visualizer';

const shouldAnalyze = process.env.ANALYZE;

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		legacy({
			targets: ['defaults', 'not IE 11'],
		}),
		mkcert({
			source: 'coding',
		}),
	],
	build: {
		rollupOptions: {
			plugins: !!shouldAnalyze ? [visualizer({ filename: './dist/_stats.html' })] : [],
		},
		sourcemap: !!shouldAnalyze,
	},
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
		proxy: {
			/**
			 * When we use proxy API requests, we can get data from an external website that throws an error by default (if we don't use a proxy)
			 * https://localhost:3000/api/**  ->  https://jsonplaceholder.typicode.com/**
			 *
			 * @example
			 * 	https://localhost:3000/api/todos/1  ->  https://jsonplaceholder.typicode.com/todos/1
			 **/
			'/api/': {
				target: 'https://jsonplaceholder.typicode.com/',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
});
