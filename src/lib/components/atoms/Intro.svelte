<script>
	import { A, Li, List } from 'flowbite-svelte';
</script>

<div class="intro text-center md:text-left mx-5">
	<!-- <Avatar class="mb-2 inline-block h-10 w-10" src={personal_logo} alt="Me" /> -->
	<h5 class="font-semilight mb-1 tracking-tight text-slate-600 dark:text-slate-300">
		Hi, my name is
	</h5>
	<h1 class="hidden md:block text-4xl font-bold tracking-tight text-slate-200">
		<span class="text-latte-blue dark:text-white">Aunali</span><span
			class="pl-2 text-sm text-slate-500 dark:text-slate-300 underline decoration-slate-500 decoration-1"
			title="also known as">aka</span
		><span class="pl-2 text-sm text-slate-600 dark:text-slate-300">Cossale</span>
	</h1>
	<div class="md:hidden flex flex-col text-4xl font-bold tracking-tight text-slate-200">
		<span class="text-latte-blue dark:text-white">Aunali</span>
		<span
			class="mb-4 text-sm text-slate-500 dark:text-slate-300 underline decoration-slate-500 decoration-1"
			title="also known as"
			>aka <span class="pl-2 text-sm text-slate-600 dark:text-slate-300">Cossale</span></span
		>
	</div>
	<h3 class="text-lg font-medium tracking-tight text-slate-600 dark:text-slate-200">
		Computer Science Student
	</h3>
	<List class="flex flex-row justify-center items-center md:justify-start mt-4 space-x-4 list-none">
		<Li class="flex justify-center">
			<A href="mailto:cossale@revanced.app">
				<svg
					class="text-slate-600 dark:text-slate-300 text-2xl h-7 w-7"
					aria-hidden="true"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</A>
		</Li>
		<Li>
			<A href="https://github.com/Aunali321">
				<i class="fa-brands fa-github text-slate-600 dark:text-slate-300 text-2xl" />
			</A>
		</Li>
		<Li>
			<A href="https://discord.com/users/164673069212893184">
				<i class="fa-brands fa-discord text-slate-600 dark:text-slate-300 text-2xl" />
			</A>
		</Li>
	</List>
	<p class="mt-4 text-lg font-normal tracking-tight text-slate-500 dark:text-slate-200">
		A 20 year old open-source developer from India. I'm very passionate about flutter, reverse
		engineering, open source,and all sorts of music.
	</p>
	<p class="mt-4 text-md tracking-tight text-slate-500 dark:text-slate-200">
		My interests include Reverse Engineering, Web scraping, Bash Scripting, and Automation.
	</p>
</div>
