<script>
	// @ts-ignore
	import { Card, Hr, Img, Li, List } from 'flowbite-svelte';
	import AnimatedLink from '$lib/components/AnimatedLink.svelte';
	import ItemCard from '$lib/components/ItemCard.svelte';

	let baseIconsURL = 'https://cdn.simpleicons.org/';
	let skillsWithIcons = [
		{
			name: 'Flutter',
			icon: `${baseIconsURL}/flutter`,
			site: 'https://flutter.dev'
		},
		{
			name: 'Dart',
			icon: `${baseIconsURL}/dart`,
			site: 'https://dart.dev'
		},
		{
			name: 'Kotlin',
			icon: `${baseIconsURL}/kotlin`,
			site: 'https://kotlinlang.org'
		},
		{
			name: 'Javascript',
			icon: `${baseIconsURL}/javascript`,
			site: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
		},
		{
			name: 'PHP',
			icon: `${baseIconsURL}/php`,
			site: 'https://www.php.net'
		},
		{
			name: 'TailwindCSS',
			icon: `${baseIconsURL}/tailwindcss`,
			site: 'https://tailwindcss.com'
		},
		{
			name: 'Jetpack Compose',
			icon: `${baseIconsURL}/jetpackcompose`,
			site: 'https://developer.android.com/jetpack/compose'
		}
	];

	// disable right clicking unless its <a> tag
	document.addEventListener('contextmenu', (event) => {
		// @ts-ignore
		if (event.target.tagName !== 'A') event.preventDefault();
	});
</script>

<section class="py-12 latte dark:bg-gray-900 select-none dark:mocha">
	<div class="flex space-x-36 justify-center">
		<div class="left w-1/4">
			<div class="intro">
				<!-- <Avatar class="mb-2 inline-block h-10 w-10" src={personal_logo} alt="Me" /> -->
				<h5 class="font-semilight mb-1 tracking-tight text-slate-600 dark:text-slate-300">
					Hi, my name is
				</h5>
				<h1 class="text-4xl font-bold tracking-tight text-slate-200">
					<span class="text-latte-blue dark:text-white">Aunali</span><span
						class="pl-2 text-sm text-slate-500 dark:text-slate-300 underline decoration-slate-500 decoration-1"
						title="also known as">aka</span
					><span class="pl-2 text-sm text-slate-600 dark:text-slate-300">Cossale</span>
				</h1>
				<h3 class="text-lg font-medium tracking-tight text-slate-600 dark:text-slate-200">
					Computer Science Student
				</h3>
				<p class="mt-4 text-lg font-normal tracking-tight text-slate-500 dark:text-slate-200">
					A open-source developer from India. I'm a self-taught software developer who's very
					passionate about reverse engineering.
				</p>
				<!-- about. smaller fonts -->
				<p class="mt-4 text-md tracking-tight text-slate-500 dark:text-slate-200">
					My interests include Reverse Engineering, P2P File transfer protocol, Web scraping, Bash
					Scripting, Automation.
				</p>
			</div>
			<!-- Experience Card -->
			<Card class="mt-10">
				<div class="heading flex">
					<svg
						class="w-6 h-6 mr-2 text-ctp-mauve"
						aria-hidden="true"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<h3 class="tracking-tight font-semibold text-gray-900 dark:text-ctp-mauve">
						Organizations
					</h3>
				</div>

				<div class="flex items-center mt-5">
					<img
						class="w-12 h-12 mr-2 rounded-full"
						src="https://raw.githubusercontent.com/revanced/revanced-branding/8914e9473afbefd2fa3245ed99cfe2b66e959e92/assets/revanced-logo/revanced-logo-round.svg"
						alt="Cossale"
					/>
					<div>
						<a
							href="https://revanced.app"
							class="text-lg font-medium tracking-tight text-gray-900 dark:text-white hover:text-latte-lavender dark:hover:text-mocha-lavender focus-visible:text-mocha-lavender"
						>
							ReVanced
						</a>
						<p class="text-sm font-normal tracking-tight text-gray-900 dark:text-white">
							Core team member
						</p>
					</div>
				</div>

				<div class="flex items-center mt-5">
					<img
						class="w-12 h-12 mr-2 rounded-full"
						src="https://avatars.githubusercontent.com/u/122711804?s=200&v=4"
						alt="Cossale"
					/>
					<div>
						<a
							href="https://venic.app"
							class="text-lg font-medium tracking-tight text-gray-900 dark:text-white hover:text-latte-lavender dark:hover:text-mocha-lavender focus-visible:text-mocha-lavender"
						>
							Venic
						</a>
						<p class="text-sm font-normal tracking-tight text-gray-900 dark:text-white">
							Core team member
						</p>
					</div>
				</div>
			</Card>
			<!-- Education Card -->
			<Card class="mt-5">
				<div class="heading flex">
					<svg
						class="w-6 h-6 mr-2 text-ctp-mauve"
						aria-hidden="true"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<h3 class="tracking-tight font-semibold text-gray-900 dark:text-ctp-mauve">Education</h3>
				</div>
				<div class="items-center mt-5">
					<a
						href="https://maktabahjafariyah.org"
						class="text-lg font-medium tracking-tight text-gray-900 dark:text-white hover:text-latte-lavender dark:hover:text-mocha-lavender focus-visible:text-mocha-lavender"
					>
						Bachelor of Computer Applications
					</a>
					<p class="text-sm mt-1 font-normal tracking-tight text-gray-900 dark:text-white">
						Maktabah Jafariyah Knowledge & Research Academy
					</p>
					<p class="text-sm mt-1 font-normal tracking-tight text-gray-700 dark:text-gray-300">
						2021 - 2024
					</p>
				</div>
			</Card>
			<!-- skills card -->
			<Card class="mt-5">
				<div class="heading flex">
					<svg
						class="w-6 h-6 mr-2 text-ctp-mauve"
						aria-hidden="true"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<h3 class="tracking-tight font-semibold text-gray-900 dark:text-ctp-mauve">Skills</h3>
				</div>
				<div class="items-center mt-5 space-y-4">
					<!-- map skills and icons -->
					{#each skillsWithIcons as skill}
						<div class="flex space-x-3 items-center">
							<Img src={skill.icon} alt={skill.name + ' logo'} class="h-8 w-8" />
							<a
								href={skill.site}
								class="text-base tracking-tight text-gray-900 dark:text-white hover:text-latte-lavender dark:hover:text-mocha-lavender focus-visible:text-mocha-lavender"
								>{skill.name}</a
							>
						</div>
					{/each}
				</div>
			</Card>
		</div>

		<div class="right max-w-screen-sm">
			<h2
				class="text-xl font-bold uppercase tracking-widest text-latte-blue lg:relative lg:right-4 dark:text-ctp-mauve"
			>
				Experience
			</h2>
			<ItemCard
				timespan="May 2022 - Present"
				href="https://revanced.app"
				role="Core member · ReVanced"
				short_desc=""
				external_links={[
					{
						label: 'GitHub',
						url: 'https://github.com/revanced'
					}
				]}
				tags={[]}
			>
				Following the shutdown of YT Vanced, I had the opportunity to collaborate with a group of
				individuals I had not previously worked with. We worked together to preserve the legacy of
				YT Vanced, resulting in the development of ReVanced - a powerful library that allows
				developers to add features to existing applications. To simplify the installation process
				for users, we also created an Android app. Today, ReVanced has a thriving community with
				over 100k+ subredditors, 88k+ Discord members, 40k+ Telegram members, and 10k+ GitHub
				followers.
			</ItemCard>
			<h2
				class="text-xl mt-10 font-bold uppercase tracking-widest text-latte-blue lg:relative lg:right-4 dark:text-ctp-mauve"
			>
				Projects
			</h2>
			<div class="projects space-y-8">
				<ItemCard
					timespan="July 2022 - Present"
					href="https://github.com/revanced/revanced-manager"
					role="ReVanced Manager"
					short_desc="- patch any Dalvik Android application."
					external_links={[
						{
							url: 'https://github.com/revanced/revanced-patcher',
							label: 'revanced-patcher'
						},
						{
							url: 'https://github.com/revanced/revanced-manager',
							label: 'revanced-manager'
						}
					]}
					tags={['Flutter', 'Dart', 'Kotlin']}
				>
					The ReVanced Manager is an Android application that allows you to modify any Dalvik
					Android application to add, remove and/or modify existing functionality. It dissassembles
					the APK locally on your device, makes the required changes using our in-house
					<AnimatedLink href="https://github.com/revanced/revanced-patcher"
						>patcher library</AnimatedLink
					>
					and then assembles it back into an APK again. You can find it on
					<AnimatedLink href="https://github.com/revanced/revanced-manager">GitHub</AnimatedLink>
				</ItemCard>
				<ItemCard
					timespan="February 2022"
					href="https://github.com/Aunali321/NotesCentral"
					role="NotesCentral"
					short_desc="- a practicals sharing app for students."
					external_links={[
						{
							url: 'https://github.com/Aunali321/NotsCentral',
							label: 'NotesCentral'
						}
					]}
					tags={['PHP', 'MySQL', 'TailwindCSS']}
				>
					NotesCentral is a practicals sharing app for students primarily for code. It allows
					students to upload their practicals and share them with other students. It has syntax
					highlighting for code for popular programming languages. It also has authentication and
					authorization. It is styled beautifully using TailwindCSS and is built using PHP and
					MySQL.
				</ItemCard>
				<ItemCard
					timespan="January 2022 - February 2022"
					href="https://github.com/Aunali321/torrent_scraper"
					role="Torrent Scraper"
					short_desc="- a torrent scraper for 1337x."
					external_links={[
						{
							url: 'https://github.com/Aunali321/torrent_scraper',
							label: 'Torrent Scraper'
						},
						{
							url: 'https://github.com/webtorrent/webtorrent',
							label: 'WebTorrent'
						}
					]}
					tags={['Dart', 'WebTorrent', 'Web Scraping']}
				>
					Scrapes 1337x torrent site to get magnet links. Magnet links are then passed to <AnimatedLink
						href="https://github.com/webtorrent/webtorrent">WebTorrent</AnimatedLink
					>
					to download the file and stream it locally in VLC media player. It is built using Dart and
					WebTorrent. It is a CLI application.
				</ItemCard>
			</div>
		</div>
	</div>
	<!-- line that suggest end of page -->
	<div class="flex justify-center items-center mt-16 px-24">
		<Hr width="w-full mr-8" />
		<svg
			class="animate-bounce w-12 h-12 text-latte-blue dark:text-ctp-mauve"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fill-rule="evenodd"
				d="M10 3.333a6.667 6.667 0 100 13.334A6.667 6.667 0 0010 3.333zm0 1.667a5 5 0 100 10A5 5 0 0010 5z"
				clip-rule="evenodd"
			/>
		</svg>
		<Hr width="w-full ml-8" />
	</div>
</section>
