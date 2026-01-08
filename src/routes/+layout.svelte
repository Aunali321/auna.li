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
		<title>AunAli K.</title>
		<!-- Default OG Meta Tags -->
		<meta property="og:site_name" content="AunAli K." />
		<meta property="og:type" content="website" />
		<meta property="og:url" content="https://auna.li" />
		<meta property="og:title" content="AunAli K. - AI/ML Tech Lead" />
		<meta
			property="og:description"
			content="AI/ML Tech Lead passionate about building intelligent systems and software."
		/>
		<meta property="og:image" content="https://auna.li/og-image.png" />
		<!-- Twitter Card -->
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content="AunAli K. - AI/ML Tech Lead" />
		<meta
			name="twitter:description"
			content="AI/ML Tech Lead passionate about building intelligent systems and software."
		/>
		<meta name="twitter:image" content="https://auna.li/og-image.png" />
		<!-- Preload fonts -->
		<link rel="preconnect" href="https://fonts.bunny.net" crossorigin="anonymous" />
		<link
			rel="preload"
			href="https://fonts.bunny.net/css?family=jetbrains-mono:400,500,600,700"
			as="style"
		/>
		<link
			rel="stylesheet"
			href="https://fonts.bunny.net/css?family=jetbrains-mono:400,500,600,700"
		/>
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
			integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
			crossorigin="anonymous"
			referrerpolicy="no-referrer"
		/>
	</head>
	<body class="dark:bg-gray-900">
		<Navbar navClass="lg:px-60 md:px-12 py-3 px-6 md:py-6" let:hidden let:toggle>
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
				<NavButton href="/blog">Blog</NavButton>
				<NavButton href="/contact">Contact</NavButton>
			</NavUl>
		</Navbar>

		<slot />
	</body>
</html>
