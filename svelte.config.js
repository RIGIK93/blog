import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex'
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from '@mapbox/rehype-prism'
import rehypeKatex from 'rehype-katex-svelte'
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkWikiLink from '@portaljs/remark-wiki-link'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [
				rehypeSlug, 
				rehypeAutolinkHeadings,
				rehypePrism,
				rehypeKatex,
			],
			remarkPlugins: [
				remarkMath,
				remarkParse,
				remarkWikiLink,
				// remarkCallouts,
				// remarkRehype,
				// rehypeStringify
			]
		})
	],

	extensions: ['.svelte', '.md'],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
