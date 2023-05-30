<script>
	import { fade, blur, slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	let animate = false;

	const helloInDifferentLanguages = [
		'Hi',
		'नमस्ते',
		'પધારો',
		'سَلَام',
		'God dag',
		'Bonjour',
		'Guten Tag',
		'Marhaba',
		'Hola',
		'こんにちは'
	];
	let currentHello = helloInDifferentLanguages[0];
	let currentIndex = 0;

	// Function to update the hello text with the next language
	function updateHelloText() {
		currentIndex = (currentIndex + 1) % helloInDifferentLanguages.length;
		currentHello = helloInDifferentLanguages[currentIndex];
	}
	onMount(() => {
		animate = true;
		setInterval(updateHelloText, 2000);
	});
</script>

<section class="pt-28 dark:bg-gray-900">
	{#if animate}
		<div
			class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16"
			transition:blur={{ duration: 500 }}
		>
			<div class="flex justify-center">
				<h1
					class="mb-4 text-4xl p-0 font-bold md:text-6xl lg:text-8xl dark:text-white flex flex-col-reverse"
				>
					{#key currentHello}
						{#if currentHello}
							<span transition:slide={{ duration: 2000, easing: cubicOut }}
								>{currentHello}! &nbsp
							</span>
						{/if}
					{/key}
				</h1>
				<h1 class="mb-4 text-4xl p-0 font-bold md:text-6xl lg:text-8xl dark:text-white">
					I'm Aunali K.
				</h1>
			</div>

			<p
				class="mb-8 text-2xl font-normal md:text-3xl lg:text-4xl sm:px-16 lg:px-48 dark:text-gray-200"
			>
				a Web & Flutter developer, based in India
			</p>
		</div>

		<div class="flex items-center justify-center" transition:fade={{ duration: 700 }}>
			<button
				type="button"
				class="py-3.5 px-7 mr-2 mb-2 text-xl font-semibold text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
				>👋 &nbsp;Connect with me</button
			>
		</div>
	{/if}
</section>
