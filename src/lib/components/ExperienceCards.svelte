<script>
	import ItemCard from './atoms/ItemCard.svelte';
	import { user } from '../../data/Data';
</script>

<div class="mb-5">
	<!-- repeat for each experience in user.experiences -->
	{#each user.experience as experience}
		<ItemCard
			timespan={experience.timespan}
			href={experience.href}
			role={experience.role}
			short_desc=""
			external_links={experience.external_links}
			tags={[]}
		>
			{@html experience.description}
		</ItemCard>
	{/each}
</div>
