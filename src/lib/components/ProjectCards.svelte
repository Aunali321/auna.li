<script>
	import ItemCard from './ItemCard.svelte';
	import AnimatedLink from './atoms/AnimatedLink.svelte';
</script>

<div class="projects md:space-y-2 mt-5">
	<ItemCard
		timespan="July 2022 - Present"
		href="https://github.com/revanced/revanced-manager"
		role="ReVanced Manager"
		short_desc="patch any Dalvik Android application."
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
		The ReVanced Manager is an Android application that allows you to modify any Dalvik Android
		application to add, remove and/or modify existing functionality. It dissassembles the APK
		locally on your device, makes the required changes using our in-house
		<AnimatedLink href="https://github.com/revanced/revanced-patcher">patcher library</AnimatedLink>
		and then assembles it back into an APK again. You can find it on
		<AnimatedLink href="https://github.com/revanced/revanced-manager">GitHub.</AnimatedLink>
	</ItemCard>
	<ItemCard
		timespan="February 2022"
		href="https://github.com/Aunali321/NotesCentral"
		role="NotesCentral"
		short_desc="a practicals sharing app for students."
		external_links={[
			{
				url: 'https://github.com/Aunali321/NotsCentral',
				label: 'NotesCentral'
			}
		]}
		tags={['PHP', 'MySQL', 'TailwindCSS']}
	>
		NotesCentral is a practicals sharing app for students primarily for code. It allows students to
		upload their practicals and share them with other students. It has syntax highlighting for code
		for popular programming languages. It also has authentication and authorization. It is styled
		beautifully using TailwindCSS and is built using PHP and MySQL.
	</ItemCard>
	<ItemCard
		timespan="January 2022 - February 2022"
		href="https://github.com/Aunali321/torrent_scraper"
		role="Torrent Scraper"
		short_desc="a torrent scraper for 1337x."
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
		to download the file and stream it locally in VLC media player. It is built using Dart and WebTorrent.
		It is a CLI application.
	</ItemCard>
</div>
