<script>
	import Cards from '$lib/components/Cards.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import BottomLine from '$lib/components/atoms/BottomLine.svelte';
	import ExperienceCards from '$lib/components/ExperienceCards.svelte';
	import ProjectCards from '$lib/components/ProjectCards.svelte';
	import Heading from '$lib/components/atoms/Heading.svelte';
	import { onMount } from 'svelte';

	// disable right clicking unless its <a> tag
	onMount(() => {
		document.addEventListener('contextmenu', (event) => {
			// @ts-ignore
			if (event.target.tagName !== 'A') event.preventDefault();
		});
	});
</script>

<section class="py-12 latte dark:bg-gray-900 select-none dark:mocha">
	<div class="flex flex-col md:flex-row md:space-x-36 justify-center">
		<div class="left md:w-1/4">
			<Intro />
			<Cards />
		</div>
		<div class="right max-w-screen-sm">
			<Heading>Experience</Heading>
			<ExperienceCards />
			<Heading>Projects</Heading>
			<ProjectCards />
		</div>
	</div>
	<BottomLine />
</section>
