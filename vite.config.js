import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path'

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$css: path.resolve("./src/css"),
			$inc: path.resolve("./src/inc"),
			$svg: path.resolve("./src/svg")
		}
	}
});
