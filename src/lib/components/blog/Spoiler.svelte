<script lang="ts">
	let revealed = false;
</script>

<span
	class="inline cursor-pointer transition-all duration-200 rounded px-1
		{revealed
		? 'bg-transparent text-inherit'
		: 'bg-gray-900 dark:bg-gray-100 text-transparent hover:bg-gray-700 dark:hover:bg-gray-300 select-none'}"
	on:click={() => (revealed = true)}
	on:keypress={(e) => e.key === 'Enter' && (revealed = true)}
	role="button"
	tabindex="0"
	title={revealed ? '' : 'Click to reveal'}><slot /></span
>
