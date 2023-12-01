<script lang="ts">
	export let href = '';
	export let size = 'md';
	if (size === 'sm') {
		size = 'py-2.5 px-5 text-sm';
	} else if (size === 'md') {
		size = 'py-3.5 px-7 text-xl mr-2 mb-2';
	} else if (size === 'lg') {
		size = 'py-4 px-8 text-2xl';
	} else {
		size = 'py-3.5 px-7 text-xl';
	}
</script>

<a
	type="button"
	{href}
	class="hover:animate-pulse-slow {size} font-semibold text-gray-900 focus:outline-none bg-white rounded-full border border-gray-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
	><slot />
</a>
