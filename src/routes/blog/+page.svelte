<script lang="ts">
	import type { PageData } from './$types';
	import { filterPosts } from '$lib/utils/blog';

	export let data: PageData;

	let search = '';
	let selectedTags: string[] = [];

	$: filteredPosts = filterPosts(data.posts, search, selectedTags);

	function toggleTag(tag: string) {
		if (selectedTags.includes(tag)) {
			selectedTags = selectedTags.filter((t) => t !== tag);
		} else {
			selectedTags = [...selectedTags, tag];
		}
	}

	function formatDate(dateStr: string): string {
		return new Date(dateStr).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Blog | AunAli K.</title>
	<meta name="description" content="Thoughts on AI/ML, software development, and technology." />
</svelte:head>

<section class="py-12 pt-28 min-h-screen">
	<div class="max-w-3xl mx-auto px-4">
		<div class="text-center mb-10">
			<h1
				class="text-3xl md:text-4xl font-bold uppercase tracking-widest text-latte-blue dark:text-ctp-mauve mb-3"
			>
				Blog
			</h1>
			<p class="text-gray-600 dark:text-gray-400">
				Thoughts on AI/ML, software development, and technology.
			</p>
		</div>

		<!-- Search -->
		<div class="mb-6">
			<input
				type="text"
				bind:value={search}
				placeholder="Search posts..."
				class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
					bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
					focus:ring-2 focus:ring-latte-lavender dark:focus:ring-mocha-lavender focus:border-transparent
					placeholder-gray-500 dark:placeholder-gray-400 transition-all"
			/>
		</div>

		<!-- Tags -->
		{#if data.tags.length > 0}
			<div class="mb-8 flex flex-wrap gap-2">
				{#each data.tags as { tag, count }}
					<button
						on:click={() => toggleTag(tag)}
						class="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 transition-all
							{selectedTags.includes(tag)
							? 'bg-latte-lavender dark:bg-mocha-lavender text-white dark:text-gray-900'
							: 'bg-indigo-300/25 dark:bg-indigo-400/10 text-latte-lavender dark:text-mocha-lavender hover:bg-indigo-300/40 dark:hover:bg-indigo-400/20'}"
					>
						{tag}
						<span class="ml-1 opacity-70">({count})</span>
					</button>
				{/each}
			</div>
		{/if}

		<!-- Posts -->
		{#if filteredPosts.length === 0}
			<p class="text-gray-500 dark:text-gray-400 text-center py-12">
				{#if data.posts.length === 0}
					No posts yet. Check back soon!
				{:else}
					No posts match your search.
				{/if}
			</p>
		{:else}
			<div class="space-y-6">
				{#each filteredPosts as post}
					<a
						href="/blog/{post.slug}"
						class="block p-6 rounded-xl border border-gray-200 dark:border-gray-700
							bg-white/50 dark:bg-gray-800/50
							hover:border-latte-lavender dark:hover:border-mocha-lavender
							transition-all duration-300 group"
					>
						<div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
							<h2
								class="text-xl font-bold text-latte-blue dark:text-ctp-mauve
									group-hover:text-latte-lavender dark:group-hover:text-mocha-lavender transition-colors"
							>
								{post.title}
							</h2>
							<span class="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
								{formatDate(post.date)}
							</span>
						</div>

						<p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
							{post.description}
						</p>

						<div class="flex items-center justify-between">
							<div class="flex flex-wrap gap-2">
								{#each post.tags as tag}
									<span
										class="flex items-center rounded-full dark:bg-indigo-400/10 bg-indigo-300/25
											px-2 py-0.5 text-xs font-medium leading-5 text-latte-lavender dark:text-mocha-lavender"
									>
										{tag}
									</span>
								{/each}
							</div>
							<span class="text-xs text-gray-500 dark:text-gray-400">
								{post.readingTime} min read
							</span>
						</div>
					</a>
				{/each}
			</div>
		{/if}

		<!-- RSS Link -->
		<div class="mt-12 text-center">
			<a
				href="/rss.xml"
				class="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400
					hover:text-latte-lavender dark:hover:text-mocha-lavender transition-colors"
			>
				<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z"
					/>
				</svg>
				Subscribe via RSS
			</a>
		</div>
	</div>
</section>
