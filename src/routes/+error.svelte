<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Page Not Found | AunAli K.</title>
</svelte:head>

<section class="h-[calc(100vh-112px)] flex items-center justify-center px-4">
	<div class="text-center">
		<h1 class="text-8xl md:text-9xl font-bold text-latte-blue dark:text-ctp-mauve mb-4">
			{$page.status}
		</h1>
		<p class="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
			{#if $page.status === 404}
				Page not found
			{:else}
				Something went wrong
			{/if}
		</p>
		<p class="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
			{#if $page.status === 404}
				The page you're looking for doesn't exist or has been moved.
			{:else}
				{$page.error?.message || 'An unexpected error occurred.'}
			{/if}
		</p>
		<div class="flex flex-wrap gap-4 justify-center">
			<a
				href="/"
				class="inline-flex items-center gap-2 px-6 py-3 rounded-full
					bg-latte-lavender dark:bg-mocha-lavender text-white dark:text-gray-900
					font-medium hover:opacity-90 transition-opacity"
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
					/>
				</svg>
				Go home
			</a>
			<a
				href="/blog"
				class="inline-flex items-center gap-2 px-6 py-3 rounded-full
					border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300
					font-medium hover:border-latte-lavender dark:hover:border-mocha-lavender transition-colors"
			>
				Read blog
			</a>
		</div>
	</div>
</section>
