<script lang="ts">
	export let type: 'info' | 'warning' | 'success' | 'error' | 'note' = 'info';
	export let title: string = '';

	const styles = {
		info: {
			bg: 'bg-blue-50 dark:bg-blue-900/20',
			border: 'border-blue-400 dark:border-blue-500',
			icon: '💡',
			title: 'text-blue-800 dark:text-blue-300'
		},
		warning: {
			bg: 'bg-yellow-50 dark:bg-yellow-900/20',
			border: 'border-yellow-400 dark:border-yellow-500',
			icon: '⚠️',
			title: 'text-yellow-800 dark:text-yellow-300'
		},
		success: {
			bg: 'bg-green-50 dark:bg-green-900/20',
			border: 'border-green-400 dark:border-green-500',
			icon: '✅',
			title: 'text-green-800 dark:text-green-300'
		},
		error: {
			bg: 'bg-red-50 dark:bg-red-900/20',
			border: 'border-red-400 dark:border-red-500',
			icon: '❌',
			title: 'text-red-800 dark:text-red-300'
		},
		note: {
			bg: 'bg-gray-50 dark:bg-gray-800/50',
			border: 'border-gray-400 dark:border-gray-500',
			icon: '📝',
			title: 'text-gray-800 dark:text-gray-300'
		}
	};

	$: style = styles[type];
</script>

<div class="callout my-6 rounded-lg border-l-4 p-4 {style.bg} {style.border}">
	{#if title}
		<div class="flex items-center gap-2 font-semibold mb-2 {style.title}">
			<span>{style.icon}</span>
			<span>{title}</span>
		</div>
	{/if}
	<div class="text-gray-700 dark:text-gray-300 prose-p:m-0">
		<slot />
	</div>
</div>
