import type { PageServerLoad } from './$types';
import { getPosts, getAllTags } from '$lib/utils/blog';

export const load: PageServerLoad = async () => {
	const posts = await getPosts();
	const tags = getAllTags(posts);

	return {
		posts,
		tags
	};
};
