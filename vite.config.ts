// @ts-nocheck
import { defineConfig } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import viteImagemin from 'vite-plugin-imagemin';
import mkcert from 'vite-plugin-mkcert';
import svgr from 'vite-plugin-svgr';

import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import Unocss from 'unocss/vite';

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';

const shouldAnalyze = process.env.ANALYZE ?? false;
const isHttps = process.env.HTTPS ?? false;

// https://vitejs.dev/config/
export default defineConfig((mode) => {
	return {
		plugins: [
			react({
				// Removes React Devtools in production build
				removeDevtoolsInProd: true,

				// Exclude storybook stories
				exclude: /\.stories\.(t|j)sx?$/,
			}),

			// legacy(),

			svgr(),

			mkcert({
				source: 'coding',
			}),

			// https://github.com/antfu/unocss
			// see unocss.config.ts for config
			Unocss(),

			viteImagemin({
				disable: mode === 'development',
				mozjpeg: {
					progressive: true,
					quality: 80,
				},
				optipng: {
					enabled: true,
					optimizationLevel: 3,
				},
				pngquant: {
					quality: [0.8, 0.9],
					speed: 7,
				},
				webp: {
					quality: 80,
				},
				gifsicle: {
					optimizationLevel: 8,
					interlaced: false,
				},
			}),
			chunkSplitPlugin({
				strategy: 'all-in-one',
				customSplitting: {
					'react-vendor': ['react', 'react-dom', 'react-router-dom'],
				},
			}),
		],
		build: {
			target: 'es2018',
			rollupOptions: {
				plugins: !!shouldAnalyze ? [visualizer({ filename: './dist/_stats.html' })] : [],
			},
			sourcemap: !!shouldAnalyze,
		},
		css: {
			devSourcemap: true,
			preprocessorOptions: {
				less: {
					javascriptEnabled: true,
				},
				sass: {
					javascriptEnabled: true,
				},
			},
		},
		cacheDir: './.vite-cache',

		/**
		 * defining aliases
		 */
		resolve: {
			alias: {
				'~src': resolve(__dirname, 'src'),
				'~components': resolve(__dirname, 'src', 'components'),
				'~hooks': resolve(__dirname, 'src', 'hooks'),
				'~api': resolve(__dirname, 'src', 'api'),
				'~store': resolve(__dirname, 'src', 'store'),
				'~images': resolve(__dirname, 'src', 'assets', 'images'),
				'~styles': resolve(__dirname, 'src', 'assets', 'styles'),
				'~fonts': resolve(__dirname, 'src', 'assets', 'fonts'),
				'~utils': resolve(__dirname, 'src', 'utils'),
				'~pages': resolve(__dirname, 'src', 'pages'),
				'~constants': resolve(__dirname, 'src', 'constants'),
				'~containers': resolve(__dirname, 'src', 'containers'),
				'~types': resolve(__dirname, 'src', 'types'),
				'~sections': resolve(__dirname, 'src', 'sections'),
			},
		},
		envDir: resolve(__dirname, 'src', 'env'),
		envPrefix: 'GB_',
		server: {
			https: !!isHttps,
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
	};
});
