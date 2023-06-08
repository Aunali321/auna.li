<!-- Beautiful minimal, shimmering social Card for each social -->

<script lang="ts">
	import CircularButton from '$lib/components/atoms/CircularButton.svelte';
	import ContactHeading from '$lib/components/atoms/ContactHeading.svelte';
</script>

<section class="h-full py-12 mx-20 latte dark:bg-gray-900 select-none dark:mocha">
	<ContactHeading />

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
		<div
			class="card bg-zinc-100 dark:bg-slate-800 shadow-lg rounded-lg w-64 m-auto p-8 border-2 border-latte-blue dark:border-ctp-mauve"
		>
			<div class="flex flex-col items-center w-min h-min mx-auto">
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
				<h5 class="mb-1 text-md md:text-xl font-medium mt-2 text-gray-900 dark:text-white">Mail</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">aunvakil.aa@gmail.com</span>
				<div class="mt-6">
					<CircularButton size="sm" href="mailto:aunvakil.aa@gmail.com">Contact</CircularButton>
				</div>
			</div>
		</div>
		<div
			class="card bg-zinc-100 dark:bg-slate-800 shadow-lg rounded-lg w-64 m-auto p-8 border-2 border-latte-blue dark:border-ctp-mauve"
		>
			<div class="flex flex-col items-center w-min h-min mx-auto">
				<i class="text-5xl fa-brands fa-discord text-gray-900 dark:text-gray-300" />
				<h5 class="mb-1 text-md md:text-xl font-medium mt-2 text-gray-900 dark:text-white">
					Discord
				</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">-Cossale-#0160</span>
				<div class="mt-6">
					<CircularButton size="sm" href="https://discord.com/users/164673069212893184"
						>Message</CircularButton
					>
				</div>
			</div>
		</div>
		<div
			class="card bg-zinc-100 dark:bg-slate-800 shadow-lg rounded-lg w-64 m-auto p-8 border-2 border-latte-blue dark:border-ctp-mauve"
		>
			<div class="flex flex-col items-center w-min h-min mx-auto">
				<i class="text-5xl fa-brands fa-telegram text-gray-900 dark:text-gray-300" />
				<h5 class="mb-1 text-md md:text-xl font-medium mt-2 text-gray-900 dark:text-white">
					Telegram
				</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">t.me/AunAli121</span>
				<div class="mt-6">
					<CircularButton size="sm" href="https://t.me/AunAli121">Message</CircularButton>
				</div>
			</div>
		</div>
		<div
			class="card bg-zinc-100 dark:bg-slate-800 shadow-lg rounded-lg w-64 m-auto p-8 border-2 border-latte-blue dark:border-ctp-mauve"
		>
			<div class="flex flex-col items-center w-min h-min mx-auto">
				<i class="text-5xl fa-brands fa-github text-gray-900 dark:text-gray-300" />
				<h5 class="mb-1 text-md md:text-xl font-medium mt-2 text-gray-900 dark:text-white">
					Github
				</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">github.com/Aunali321</span>
				<div class="mt-6">
					<CircularButton size="sm" href="https://github.com/Aunali321">Follow</CircularButton>
				</div>
			</div>
		</div>
	</div>
</section>
