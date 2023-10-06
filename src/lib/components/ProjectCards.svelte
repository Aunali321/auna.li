<script>
	import ItemCard from './atoms/ItemCard.svelte';
	import { user } from '../../data/Data';
</script>

<div class="projects md:space-y-2 mt-5">
	<!-- repeat for each project in user.projects -->
	{#each user.projects as project}
		<ItemCard
			timespan={project.timespan}
			href={project.href}
			role={project.role}
			short_desc={project.short_description}
			external_links={project.external_links}
			tags={project.tags}
		>
			{@html project.description}
		</ItemCard>
	{/each}
</div>
