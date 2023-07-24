import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
		port: 3000,
	},
	resolve: {
		alias: {
			'@': resolve('src'),
		},
	},
});
