import type { RequestHandler } from './$types';
import { getPosts } from '$lib/utils/blog';

const siteUrl = 'https://auna.li';
const siteName = 'AunAli K.';
const siteDescription = 'Thoughts on AI/ML, software development, and technology.';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const posts = await getPosts();

	const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
	<title>${siteName} - Blog</title>
	<description>${siteDescription}</description>
	<link>${siteUrl}/blog</link>
	<atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
	<language>en-us</language>
	<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
	${posts
		.map(
			(post) => `
	<item>
		<title><![CDATA[${post.title}]]></title>
		<description><![CDATA[${post.description}]]></description>
		<link>${siteUrl}/blog/${post.slug}</link>
		<guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
		<pubDate>${new Date(post.date).toUTCString()}</pubDate>
		${post.tags.map((tag) => `<category>${tag}</category>`).join('\n\t\t')}
	</item>`
		)
		.join('')}
</channel>
</rss>`;

	return new Response(rss.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
