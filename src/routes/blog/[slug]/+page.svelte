<script lang="ts">
	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let data: PageData;
	let animate = false;
	let copied = false;

	onMount(() => {
		animate = true;
		// Wait for content to render, then wrap code blocks
		setTimeout(wrapCodeBlocks, 100);
	});

	function wrapCodeBlocks() {
		const pres = document.querySelectorAll('.blog-content pre');
		pres.forEach((pre) => {
			// Skip if already wrapped
			if (pre.parentElement?.classList.contains('code-wrapper')) return;

			// Create wrapper
			const wrapper = document.createElement('div');
			wrapper.className = 'code-wrapper';

			// Create copy button
			const btn = document.createElement('button');
			btn.className = 'copy-code-btn';
			btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy`;

			btn.onclick = async () => {
				const code = pre.querySelector('code')?.textContent || '';
				await navigator.clipboard.writeText(code);
				btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Copied!`;
				btn.classList.add('copied');
				setTimeout(() => {
					btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy`;
					btn.classList.remove('copied');
				}, 2000);
			};

			// Wrap
			pre.parentNode?.insertBefore(wrapper, pre);
			wrapper.appendChild(pre);
			wrapper.appendChild(btn);
		});
	}

	async function copyPost() {
		await navigator.clipboard.writeText(data.rawContent);
		copied = true;
		setTimeout(() => (copied = false), 2000);
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
	<title>{data.post.title} | AunAli K.</title>
	<meta name="description" content={data.post.description} />
	<!-- OG Meta Tags -->
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://auna.li/blog/{data.post.slug}" />
	<meta property="og:title" content={data.post.title} />
	<meta property="og:description" content={data.post.description} />
	<meta property="article:published_time" content={data.post.date} />
	{#if data.post.updated}
		<meta property="article:modified_time" content={data.post.updated} />
	{/if}
	{#each data.post.tags as tag}
		<meta property="article:tag" content={tag} />
	{/each}
	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={data.post.title} />
	<meta name="twitter:description" content={data.post.description} />
</svelte:head>

<article class="latte dark:bg-gray-900 dark:mocha min-h-screen">
	<header class="pt-4 md:pt-16">
		<div class="max-w-3xl mx-auto px-4">
			{#if animate}
				<div transition:fade={{ duration: 300 }}>
					<a
						href="/blog"
						class="inline-flex items-center gap-2 text-sm text-latte-lavender dark:text-mocha-lavender hover:underline mb-4"
					>
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 19l-7-7 7-7"
							/>
						</svg>
						Back to blog
					</a>

					<h1
						class="text-3xl md:text-4xl lg:text-5xl font-bold text-latte-blue dark:text-ctp-mauve mb-4"
					>
						{data.post.title}
					</h1>

					<p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
						{data.post.description}
					</p>

					<div class="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-400 mb-4">
						<span>Published {formatDate(data.post.date)}</span>
						<span>Updated {formatDate(data.post.updated || data.post.date)}</span>
						<span>{data.post.readingTime} min read</span>
					</div>

					<div class="flex flex-wrap gap-2 mb-4">
						{#each data.post.tags as tag}
							<span
								class="px-3 py-1 text-xs font-medium rounded-full bg-latte-lavender/10 dark:bg-mocha-lavender/10 text-latte-lavender dark:text-mocha-lavender"
							>
								{tag}
							</span>
						{/each}
						<button
							on:click={copyPost}
							class="ml-auto md:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium
								text-gray-600 dark:text-gray-400 hover:text-latte-lavender dark:hover:text-mocha-lavender transition-colors hidden"
						>
							{#if copied}
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
								Copied!
							{:else}
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2" />
									<path
										stroke-width="2"
										d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
									/>
								</svg>
								Copy post
							{/if}
						</button>
					</div>

					<button
						on:click={copyPost}
						class="flex md:hidden items-center gap-2 text-xs font-medium mb-8
							text-gray-600 dark:text-gray-400 hover:text-latte-lavender dark:hover:text-mocha-lavender transition-colors"
					>
						{#if copied}
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							Copied!
						{:else}
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2" />
								<path
									stroke-width="2"
									d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
								/>
							</svg>
							Copy post
						{/if}
					</button>
				</div>
			{/if}
		</div>
	</header>

	<div class="max-w-3xl mx-auto px-4 pb-12">
		{#if animate}
			<div
				transition:fade={{ duration: 300, delay: 100 }}
				class="blog-content prose prose-lg dark:prose-invert max-w-none
					prose-headings:text-gray-900 dark:prose-headings:text-gray-100
					prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
					prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
					prose-p:text-gray-700 dark:prose-p:text-gray-300
					prose-a:text-latte-lavender dark:prose-a:text-mocha-lavender prose-a:no-underline hover:prose-a:underline
					prose-strong:text-gray-900 dark:prose-strong:text-gray-100
					prose-code:bg-transparent prose-code:p-0 prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
					prose-pre:p-0 prose-pre:bg-transparent prose-pre:m-0
					prose-blockquote:border-latte-lavender dark:prose-blockquote:border-mocha-lavender
					prose-img:rounded-xl"
			>
				<svelte:component this={data.Content} />
			</div>
		{/if}
	</div>

	{#if animate}
		<footer
			transition:fade={{ duration: 300, delay: 200 }}
			class="max-w-3xl mx-auto px-4 py-12 border-t border-gray-200 dark:border-gray-800"
		>
			<div class="flex items-center justify-between">
				<a href="/blog" class="text-latte-lavender dark:text-mocha-lavender hover:underline">
					← Back to all posts
				</a>
				<a
					href="/rss.xml"
					class="text-sm text-gray-500 dark:text-gray-400 hover:text-latte-lavender dark:hover:text-mocha-lavender"
				>
					RSS
				</a>
			</div>
		</footer>
	{/if}
</article>
