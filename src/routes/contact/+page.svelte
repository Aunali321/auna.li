<script lang="ts">
	import ContactHeading from '$lib/components/atoms/ContactHeading.svelte';
	import ContactCard from '$lib/components/atoms/ContactCard.svelte';
	import { user } from '../../data/Data';
</script>

<section class="h-full py-4 md:py-12 mx-16 md:mx-20 latte dark:bg-gray-900 select-none dark:mocha">
	<ContactHeading />

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
		<!-- repeat for each contact in user.contact -->
		{#each user.contact_links as contact}
			<ContactCard
				title={contact.title}
				text={contact.text}
				href={contact.href}
				ctaText={contact.ctaText}
			>
				{@html contact.icon}
			</ContactCard>
		{/each}
	</div>
</section>
