<script lang="ts">
	import '../app.postcss';
	import { Avatar, Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import personal_logo from '../../src/assets/personal_logo.png';
	import NavButton from '$lib/components/atoms/NavButton.svelte';
	var hasIconLoaded = false;
	onMount(() => {
		hasIconLoaded = true;
	});
</script>

<html lang="en">
	<head>
		<title>Aunali K.</title>
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
			integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
			crossorigin="anonymous"
			referrerpolicy="no-referrer"
		/>
	</head>
	<body class="dark:bg-gray-900">
		<Navbar navClass="md:px-60 py-3 px-6 md:py-6" let:hidden let:toggle>
			<div class="nav flex justify-between w-full md:w-auto md:block">
				<NavBrand href="/">
					{#if hasIconLoaded}
						<div class="container">
							<Avatar
								src={personal_logo}
								class="avatar mr-3 hover:rotate-360 transition duration-1000 ease-in-out h-12 w-12 md:h-16 md:w-16"
								alt=""
							/>
						</div>
					{:else}
						<div
							class="animate-spin rounded-full h-12 w-12 md:h-16 md:w-16 border-t-2 border-b-2 border-gray-900 dark:border-gray-100"
						/>
					{/if}
				</NavBrand>
				<div class="end-nav flex list-none">
					<div class="block md:hidden">
						<NavLi><DarkMode size="lg" initialTheme="dark" /></NavLi>
					</div>
					<NavHamburger on:click={toggle} />
				</div>
			</div>

			<NavUl
				ulClass="text-xl md:text-2xl flex space-x-8 space-y-4 md:space-y-0 pb-4 justify-center items-center flex-col my-3 md:m-0 md:flex-row"
				{hidden}
				activeClass="text-latte-blue dark:text-ctp-mauve underline underline-offset-8 decoration-2 font-semibold"
				nonActiveClass="hover:text-latte-lavender dark:hover:text-ctp-mauve"
			>
				<div class="hidden md:block"><NavLi><DarkMode size="lg" initialTheme="dark" /></NavLi></div>
				<NavButton href="/">Home</NavButton>
				<NavButton href="/about">About</NavButton>
				<NavButton href="/contact">Contact</NavButton>
			</NavUl>
		</Navbar>

		<slot />
	</body>
</html>
