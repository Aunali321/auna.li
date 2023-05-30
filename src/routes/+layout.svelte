<script>
	import '../app.postcss';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import personal_logo from '../../src/assets/personal_logo.png';
	var hasIconLoaded = false;
	onMount(() => {
		hasIconLoaded = true;
	});
</script>

<html lang="en">
	<head>
		<title>Aunali K.</title>
	</head>
	<body class="dark:bg-gray-900">
		<Navbar navClass="px-60 py-6" let:hidden let:toggle>
			<NavBrand href="/">
				{#if hasIconLoaded}
					<img
						src={personal_logo}
						width="60"
						height="60"
						class="mr-3 hover:rotate-360 transition duration-500 ease-in-out"
						alt=""
					/>
				{:else}
					<div
						class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-gray-100"
					/>
				{/if}
				<!-- <img src={personal_logo} class="mr-3" height="60" width="60" alt="My Logo" /> -->
			</NavBrand>
			<NavHamburger on:click={toggle} />
			<NavUl ulClass="text-2xl flex space-x-8 justify-center items-center" {hidden}>
				<NavLi href="/"><DarkMode size="lg" initialTheme="dark" /></NavLi>
				<NavLi href="/" active={true}>Home</NavLi>
				<NavLi href="/about">About</NavLi>
				<NavLi href="/work">Work</NavLi>
				<NavLi href="/contact">Contact</NavLi>
			</NavUl>
		</Navbar>

		<slot />
	</body>
</html>
