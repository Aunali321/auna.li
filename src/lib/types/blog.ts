export interface BlogPost {
	slug: string;
	title: string;
	description: string;
	date: string;
	updated?: string;
	tags: string[];
	published: boolean;
	readingTime: number;
}

export interface BlogPostWithContent extends BlogPost {
	content: string;
}
