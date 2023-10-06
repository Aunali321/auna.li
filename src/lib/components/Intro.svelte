<script>
	import { A, Li, List } from 'flowbite-svelte';
	import { user } from '../../data/Data';
</script>

<div class="intro text-center md:text-left mx-5">
	<h5 class="font-semilight mb-1 tracking-tight text-slate-600 dark:text-slate-300">
		Hi, my name is
	</h5>
	<h1 class="hidden md:block text-4xl font-bold tracking-tight text-slate-200">
		<span class="text-latte-blue dark:text-ctp-mauve">{user.nameWithoutSuffix}</span><span
			class="pl-2 text-sm text-slate-500 dark:text-slate-300 underline decoration-slate-500 decoration-1"
			title="also known as">aka</span
		><span class="pl-2 text-sm text-slate-600 dark:text-slate-300">{user.nickname}</span>
	</h1>
	<div class="md:hidden flex flex-col text-4xl font-bold tracking-tight text-slate-200">
		<span class="text-latte-blue dark:text-ctp-mauve">{user.nameWithoutSuffix}</span>
		<span
			class="mb-4 text-sm text-slate-500 dark:text-slate-300 underline decoration-slate-500 decoration-1"
			title="also known as"
			>aka <span class="pl-2 text-sm text-slate-600 dark:text-slate-300">{user.nickname}</span
			></span
		>
	</div>
	<h3 class="text-lg font-medium tracking-tight text-slate-600 dark:text-slate-200">
		{user.ed}
	</h3>
	<p class="mt-4 text-lg font-normal tracking-tight text-slate-500 dark:text-slate-200">
		{@html user.about}
	</p>
</div>
