<script lang="ts">
	export let tabs: string[];
	export let contents: string[];
	let activeTab = 0;
</script>

<div class="tabs-container my-6">
	<div class="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
		{#each tabs as tab, i}
			<button
				class="px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap
					{activeTab === i
					? 'text-latte-lavender dark:text-mocha-lavender border-b-2 border-latte-lavender dark:border-mocha-lavender -mb-px'
					: 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'}"
				on:click={() => (activeTab = i)}
			>
				{tab}
			</button>
		{/each}
	</div>
	<div class="py-4 text-gray-700 dark:text-gray-300">
		{@html contents[activeTab]}
	</div>
</div>
