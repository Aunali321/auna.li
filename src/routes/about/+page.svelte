<script>
	import Cards from '$lib/components/Cards.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import BottomLine from '$lib/components/atoms/BottomLine.svelte';
	import ExperienceCards from '$lib/components/ExperienceCards.svelte';
	import ProjectCards from '$lib/components/ProjectCards.svelte';
	import Heading from '$lib/components/atoms/Heading.svelte';
</script>

<section class="py-12 latte dark:bg-gray-900 dark:mocha">
	<div
		class="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-24 justify-center px-4 md:px-8 lg:px-16"
	>
		<div class="left md:w-1/3 lg:w-1/4 md:min-w-[280px]">
			<Intro />
			<Cards />
		</div>
		<div class="right max-w-screen-sm flex-1">
			<Heading>Experience</Heading>
			<ExperienceCards />
			<Heading>Projects</Heading>
			<ProjectCards />
		</div>
	</div>
	<BottomLine />
</section>
