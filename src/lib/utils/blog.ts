import type { BlogPost } from '$lib/types/blog';

interface PostModule {
	metadata: Omit<BlogPost, 'slug' | 'readingTime'>;
	default: unknown;
}

function calculateReadingTime(content: string): number {
	const wordsPerMinute = 200;
	const words = content.trim().split(/\s+/).length;
	return Math.ceil(words / wordsPerMinute);
}

export async function getPosts(): Promise<BlogPost[]> {
	const posts: BlogPost[] = [];

	const paths = import.meta.glob('/src/content/blog/*.md', {
		eager: true,
		query: '?raw',
		import: 'default'
	});
	const modules = import.meta.glob<PostModule>('/src/content/blog/*.md', { eager: true });

	for (const path in modules) {
		const module = modules[path];
		const rawContent = paths[path] as string;
		const slug = path.split('/').pop()?.replace('.md', '') ?? '';

		if (module.metadata?.published) {
			posts.push({
				...module.metadata,
				slug,
				readingTime: calculateReadingTime(rawContent)
			});
		}
	}

	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPost(slug: string): Promise<{ post: BlogPost; Content: unknown } | null> {
	try {
		const paths = import.meta.glob('/src/content/blog/*.md', {
			eager: true,
			query: '?raw',
			import: 'default'
		});
		const modules = import.meta.glob<PostModule>('/src/content/blog/*.md', { eager: true });

		const path = `/src/content/blog/${slug}.md`;
		const module = modules[path];
		const rawContent = paths[path] as string;

		if (!module) return null;

		// Check if post is published
		if (!module.metadata?.published) return null;

		return {
			post: {
				...module.metadata,
				slug,
				readingTime: calculateReadingTime(rawContent)
			},
			Content: module.default
		};
	} catch {
		return null;
	}
}

export function getAllTags(posts: BlogPost[]): { tag: string; count: number }[] {
	const tagCounts = new Map<string, number>();

	posts.forEach((post) => {
		post.tags.forEach((tag) => {
			tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
		});
	});

	return Array.from(tagCounts.entries())
		.map(([tag, count]) => ({ tag, count }))
		.sort((a, b) => b.count - a.count);
}

export function filterPosts(posts: BlogPost[], search: string, selectedTags: string[]): BlogPost[] {
	return posts.filter((post) => {
		const matchesSearch =
			search === '' ||
			post.title.toLowerCase().includes(search.toLowerCase()) ||
			post.description.toLowerCase().includes(search.toLowerCase());

		const matchesTags =
			selectedTags.length === 0 || selectedTags.every((tag) => post.tags.includes(tag));

		return matchesSearch && matchesTags;
	});
}
