import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';

const highlighter = await createHighlighter({
	themes: ['catppuccin-latte', 'catppuccin-mocha'],
	langs: [
		'javascript',
		'typescript',
		'python',
		'bash',
		'json',
		'html',
		'css',
		'svelte',
		'markdown',
		'yaml',
		'rust',
		'go'
	]
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		}),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				highlighter: (code, lang) => {
					const html = highlighter.codeToHtml(code, {
						lang: lang || 'text',
						themes: {
							light: 'catppuccin-latte',
							dark: 'catppuccin-mocha'
						},
						defaultColor: false
					});
					// Escape characters that could break Svelte parsing
					const escaped = html
						.replace(/\{/g, '&#123;')
						.replace(/\}/g, '&#125;')
						.replace(/`/g, '&#96;')
						.replace(/\$/g, '&#36;');
					// Wrap in a div for copy button positioning
					return `<div class="code-block">{@html \`${escaped}\`}</div>`;
				}
			}
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
