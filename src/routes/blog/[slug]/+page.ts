import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import type { BlogPost } from '$lib/types/blog';
import type { SvelteComponent } from 'svelte';

interface PostModule {
	metadata: Omit<BlogPost, 'slug' | 'readingTime'>;
	default: typeof SvelteComponent;
}

function calculateReadingTime(content: string): number {
	const wordsPerMinute = 200;
	const words = content.trim().split(/\s+/).length;
	return Math.ceil(words / wordsPerMinute);
}

export const load: PageLoad = async ({ params }) => {
	try {
		const modules = import.meta.glob<PostModule>('/src/content/blog/*.md', { eager: true });
		const rawModules = import.meta.glob('/src/content/blog/*.md', {
			eager: true,
			query: '?raw',
			import: 'default'
		});

		const path = `/src/content/blog/${params.slug}.md`;
		const module = modules[path];
		const rawContent = rawModules[path] as string;

		if (!module) {
			throw error(404, 'Post not found');
		}

		// Check if post is published
		if (!module.metadata?.published) {
			throw error(404, 'Post not found');
		}

		const post: BlogPost = {
			...module.metadata,
			slug: params.slug,
			readingTime: calculateReadingTime(rawContent || '')
		};

		return {
			post,
			Content: module.default,
			rawContent: rawContent || ''
		};
	} catch (e) {
		throw error(404, 'Post not found');
	}
};
