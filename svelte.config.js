import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

import staticAdapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: {
				plugins: [autoprefixer]
			}
		})
	],

	kit: {
		adapter: staticAdapter(),
		router: false,
		target: '#svelte'
	}
};

export default config;
