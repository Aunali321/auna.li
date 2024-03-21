<script lang="ts">
	import AnimatedLink from './AnimatedLink.svelte';
	import TagChip from './TagChip.svelte';

	export let timespan: string;
	export let href: string;
	export let role: string;
	export let short_desc: string;
	export let external_links: { url: string; label: string }[];
	export let tags: string[];
</script>

<a
	{href}
	class="container mx-auto flex flex-col items-center text-center md:text-left md:inline-block md:max-w-max scale-[0.98] relative p-4 md:mx-0 w-full hover:scale-[1.001] md:hover:scale-[1.02] transition-transform ease-in-out duration-200 dark:hover:bg-gray-800 hover:bg-gray-100 hover:rounded-lg"
>
	<header
		class="mb-2 mt-1 text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-400/95 sm:col-span-2"
	>
		{timespan}
	</header>
	<a
		{href}
		target="_blank"
		rel="noreferrer"
		class="font-medium dark:text-slate-200 text-slate-900 transition duration-100 hover:text-latte-lavender dark:hover:text-mocha-lavender focus-visible:text-mocha-lavender"
		><a {href} class="group leading-snug">
			{role}

			{#if short_desc}
				<span
					class="mb-2 mt-1 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-latte-lavender dark:hover:text-mocha-lavender hidden md:inline"
				>
					-</span
				>
			{/if}

			<span
				class="mb-2 mt-1 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-latte-lavender dark:hover:text-mocha-lavender block md:inline"
			>
				{short_desc}</span
			><span
				class="md:inline-block translate-x-1 transition-transform group-hover:translate-x-2 hidden"
				>←</span
			>
		</a></a
	>
	<p class="mt-2 font-sans text-sm leading-normal text-slate-700 dark:text-slate-300">
		<slot />
	</p>
	<ul class="mt-2 flex flex-wrap">
		<li class="mr-4 space-x-3">
			{#each external_links as link}
				<AnimatedLink href={link.url} showIcon>{link.label}</AnimatedLink>
			{/each}
		</li>
	</ul>
	{#if tags.length > 0}
		<ul class="mt-2 flex flex-wrap">
			{#each tags as tag}
				<li class="mr-1.5 mt-2">
					<TagChip>{tag}</TagChip>
				</li>
			{/each}
		</ul>
	{/if}
</a>
