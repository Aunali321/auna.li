<script lang="ts">
	import CircularButton from '$lib/components/atoms/CircularButton.svelte';

	export let title: string;
	export let text: string;
	export let href: string;
	export let ctaText: string;
</script>

<div
	class="card bg-zinc-100 dark:bg-slate-800 shadow-lg rounded-lg w-64 m-auto p-8 border-2 border-latte-blue dark:border-ctp-mauve"
>
	<div class="flex flex-col items-center w-min h-min mx-auto">
		<slot />
		<h5 class="mb-1 text-md md:text-xl font-medium mt-2 text-gray-900 dark:text-white">{title}</h5>
		<span class="text-sm text-gray-500 dark:text-gray-400 text-center">{text}</span>
		<div class="mt-6">
			<CircularButton size="sm" {href}>{ctaText}</CircularButton>
		</div>
	</div>
</div>
