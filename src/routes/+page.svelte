<script>
	import { fade, blur } from 'svelte/transition';
	import { onMount } from 'svelte';
	let animate = false;
	onMount(() => {
		animate = true;
	});
</script>

<section class="pt-28 dark:bg-gray-900">
	{#if animate}
		<div
			class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16"
			transition:blur={{ duration: 500 }}
		>
			<h1 class="mb-4 text-4xl font-bold md:text-6xl lg:text-8xl dark:text-white">
				Hi! I'm Aunali K.
			</h1>
			<p
				class="mb-8 text-2xl font-normal md:text-3xl lg:text-4xl sm:px-16 lg:px-48 dark:text-gray-200"
			>
				a Web & Flutter developer, based in India
			</p>
		</div>

		<div class="flex items-center justify-center" transition:fade={{ duration: 700 }}>
			<!-- fade 2 seconds -->
			<button
				type="button"
				class="py-3.5 px-7 mr-2 mb-2 text-xl font-semibold text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
				>👋 &nbsp;Connect with me</button
			>
		</div>
	{/if}
</section>
