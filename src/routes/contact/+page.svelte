<script lang="ts">
	import CircularButton from '$lib/components/atoms/CircularButton.svelte';
	import ContactHeading from '$lib/components/atoms/ContactHeading.svelte';
	import ContactCard from '$lib/components/ContactCard.svelte';
</script>

<section class="h-full py-12 mx-20 latte dark:bg-gray-900 select-none dark:mocha">
	<ContactHeading />

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
		<ContactCard
			title="Mail"
			text="cossale@revanced.app"
			href="mailto:cossale@revanced.app"
			ctaText="Contact"
		>
			<svg
				class="h-11 w-11 text-gray-900 dark:text-gray-300"
				aria-hidden="true"
				fill="none"
				stroke="currentColor"
				stroke-width="2.5"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</ContactCard>

		<ContactCard
			title="Discord"
			text="@cossale"
			href="https://discord.com/users/164673069212893184"
			ctaText="Message"
		>
		<i class="text-5xl fa-brands fa-discord text-gray-900 dark:text-gray-300" />
		</ContactCard>

		<ContactCard
			title="Telegram"
			text="t.me/AunAli121"
			href="https://t.me/AunAli121"
			ctaText="Message"
		>
		<i class="text-5xl fa-brands fa-telegram text-gray-900 dark:text-gray-300" />
		</ContactCard>

		<ContactCard
			title="GitHub"
			text="github.com/Aunali321"
			href="https://github.com/Aunali321"
			ctaText="Follow"
		>
		<i class="text-5xl fa-brands fa-github text-gray-900 dark:text-gray-300" />
		</ContactCard>

	</div>
</section>
