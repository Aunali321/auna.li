<script lang="ts">
	let expanded = false;
	export let label: string = 'Click to expand';
</script>

<div class="my-4">
	<button
		class="w-full text-left px-4 py-3 bg-gray-100 dark:bg-gray-800
			hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors
			flex items-center justify-between
			{expanded ? 'rounded-t-lg' : 'rounded-lg'}"
		on:click={() => (expanded = !expanded)}
	>
		<span class="font-medium text-gray-700 dark:text-gray-300">{label}</span>
		<svg
			class="w-5 h-5 text-gray-500 transition-transform duration-200"
			class:rotate-180={expanded}
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
	</button>
	{#if expanded}
		<div
			class="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 rounded-b-lg border-x border-b border-gray-200 dark:border-gray-700"
		>
			<slot />
		</div>
	{/if}
</div>
