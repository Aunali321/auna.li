<script lang="ts">
	import AnimatedLink from './AnimatedLink.svelte';
	import TagChip from './TagChip.svelte';

	export let timespan: string;
	export let href: string;
	export let role: string;
	export let short_desc: string;
	export let long_desc: string;
	export let external_links: { url: string; label: string }[];
	export let tags: string[];
</script>

<div class="relative mt-5 w-full">
	<header
		class="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
	>
		{timespan}
	</header>
	<a
		{href}
		target="_blank"
		rel="noreferrer"
		class="font-medium dark:text-slate-200 text-slate-900 transition duration-100 hover:text-latte-lavender dark:hover:text-mocha-lavender focus-visible:text-mocha-lavender"
		><h3 class="group leading-snug">
			{role} -
			<span
				class="mb-2 mt-1 text-xs font-semibold text-slate-500 dark:text-slate-300 hover:text-latte-lavender dark:hover:text-mocha-lavender"
			>
				{short_desc}</span
			><span class="inline-block translate-x-1 transition-transform group-hover:translate-x-2"
				>←</span
			>
		</h3></a
	>
	<p class="mt-2 font-sans text-sm leading-normal text-slate-500 dark:text-slate-300">
		{@html long_desc}
	</p>
	<ul class="mt-2 flex flex-wrap">
		<li class="mr-4 space-x-3">
			{#each external_links as link}
				<AnimatedLink href={link.url} showIcon>{link.label}</AnimatedLink>
			{/each}
		</li>
	</ul>
	<ul class="mt-2 flex flex-wrap">
		{#each tags as tag}
			<li class="mr-1.5 mt-2">
				<TagChip>{tag}</TagChip>
			</li>
		{/each}
	</ul>
</div>
