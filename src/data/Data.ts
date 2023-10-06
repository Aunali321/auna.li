interface User {
    name: string
    nameWithoutSuffix: string
    role: string
    nickname: string
    ed: string
    about: string
    orgs: Organization[]
    education: Education[]
    skills: Skill[]
    projects: Project[]
    experience: Experience[]
    contact_links: ContactLink[]
}

interface Organization {
    name: string
    role: string
    logo: string
    href: string
}

interface Education {
    name: string
    href: string
    school: string
    timespan: string
}

interface Skill {
    name: string
    icon: string
    site: string
}

interface Experience {
    role: string
    timespan: string
    href: string
    external_links: ExternalLink[]
    description: string
}

interface Project {
    role: string
    timespan: string
    href: string
    short_description: string
    external_links: ExternalLink[]
    tags: string[]
    description: string
}

interface ExternalLink {
    label: string
    url: string
}

interface ContactLink {
    title: string
    text: string
    href: string
    ctaText: string
    icon: string
}

let baseIconsURL = 'https://cdn.simpleicons.org/';


export let user: User = {
    name: "Aunali K.",
    nameWithoutSuffix: "Aunali",
    role: "a Web & Mobile developer, based in India",
    nickname: "Cossale",
    ed: "Computer Science Student",
    about: "A 20 year old open-source developer from India. I'm very passionate about flutter, reverse engineering, open source,and all sorts of music. <br /> <br /> My interests include Reverse Engineering, Web scraping, Bash Scripting, and Automation.",
    orgs: [
        {
            name: "ReVanced",
            role: "Core team member",
            logo: "https://avatars.githubusercontent.com/u/101597779?s=200&v=4",
            href: "https://revanced.app"
        },
        {
            name: "Venic",
            role: "Core team member",
            logo: "https://avatars.githubusercontent.com/u/122711804?s=200&v=4",
            href: "https://venic.app"
        },
    ],
    education: [
        {
            name: "Bachelor of Computer Applications",
            href: "https://maktabahjafariyah.org/",
            school: "Maktabah Jafariyah Knowledge & Research Academy",
            timespan: "2021 - 2024"
        }
    ],
    skills: [
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
    ],
    projects: [
        {
            role: "ReVanced Manager",
            href: "https://github.com/revanced/revanced-manager",
            timespan: "July 2022 - Present",
            short_description: "patch any Dalvik Android application.",
            external_links: [
                {
                    url: 'https://github.com/revanced/revanced-patcher',
                    label: 'revanced-patcher'
                },
                {
                    url: 'https://github.com/revanced/revanced-manager',
                    label: 'revanced-manager'
                }
            ],
            tags: ["Flutter", "Dart", "Kotlin"],
            description: "The ReVanced Manager is an Android application that allows you to modify any Dalvik Android application to add, remove and/or modify existing functionality. It dissassembles the APK locally on your device, makes the required changes using our in-house <a class='relative inline-flex items-center text-sm font-medium dark:text-mocha-lavender text-latte-lavender transition duration-100 hover:scale-[1.03] hover:text-latte-lavender dark:hover:text-mocha-lavender focus-visible:text-mocha-lavender' href='https://github.com/revanced/revanced-patcher'>patcher library</a> and then assembles it back into an APK again. You can find it on <a class='relative inline-flex items-center text-sm font-medium dark:text-mocha-lavender text-latte-lavender transition duration-100 hover:scale-[1.03] hover:text-latte-lavender dark:hover:text-mocha-lavender focus-visible:text-mocha-lavender' href='https://github.com/revanced/revanced-manager'>GitHub.</a>",
        },
         {
            role: "NotesCentral",
            href: "https://github.com/Aunali321/NotesCentral",
            timespan: "February 2022",
            short_description: "a practicals sharing app for students.",
            external_links: [
                {
				url: 'https://github.com/Aunali321/NotesCentral',
				label: 'NotesCentral'
			}
            ],
            tags: ['PHP', 'MySQL', 'TailwindCSS'],
            description: "NotesCentral is a practicals sharing app for students primarily for code. It allows students to upload their practicals and share them with other students. It has syntax highlighting for code for popular programming languages. It includes authentication and authorization. It is styled using TailwindCSS and is built using PHP and MySQL.",
        },
        {
            role: "Torrent Scraper",
            href: "https://github.com/Aunali321/torrent_scraper",
            timespan: "January 2022 - February 2022",
            short_description: "Scrapes torrent site to stream movies.",
            external_links: [
               {
				url: 'https://github.com/Aunali321/torrent_scraper',
				label: 'Torrent Scraper'
			},
			{
				url: 'https://github.com/webtorrent/webtorrent',
				label: 'WebTorrent'
			}
            ],
            tags: ['Dart', 'WebTorrent', 'Web Scraping'],
            description: "Scrapes 1337x torrent site to get magnet links. Magnet links are then passed to <a class='relative inline-flex items-center text-sm font-medium dark:text-mocha-lavender text-latte-lavender transition duration-100 hover:scale-[1.03] hover:text-latte-lavender dark:hover:text-mocha-lavender focus-visible:text-mocha-lavender' href='https://github.com/webtorrent/webtorrent'>WebTorrent</a> to download the file and stream it locally in VLC media player. It is built using Dart and WebTorrent.It is a CLI application",
        },
    ],
    experience: [
        {
            role: "Core Software Developer · ReVanced",
            href: "https://revanced.app",
            timespan: "May 2022 - Present",
            external_links: [
                {
                    url: 'https://revanced.app',
                    label: 'Website'
                },
                {
				label: 'GitHub',
				url: 'https://github.com/revanced'
			}
            ],
            description: `
           • Collaborated with a team of skilled developers on an open-source project to create ReVanced, a flexible Android library used to modify code in other apps to add or remove features <br /> <br />
• Engineered an Android app to streamline installation for 150K+ Reddit subscribers, 100K+ Discord members, 50K+ Telegram users, and 15K+ GitHub followers <br /> <br />
• Combined expertise to develop an adaptable framework for endless customization, benefiting both developers and consumers <br /> <br />
• Showcased abilities to work collaboratively within a professional team to deliver innovative results`,
        },
    ],
    contact_links: [
        {
            title: "Mail",
			text: "cossale@revanced.app",
			href: "mailto:cossale@revanced.app",
			ctaText: "Contact",
            icon: "<svg class='h-11 w-11 text-gray-900 dark:text-gray-300' aria-hidden='true' fill='none' stroke='currentColor' stroke-width='2.5' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'> <path d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' stroke-linecap='round' stroke-linejoin='round' /> </svg>"
        },
        {
            title: "Discord",
			text: "@cossale",
			href: "https://discord.com/users/164673069212893184",
			ctaText: "Message",
            icon: "<i class='text-5xl fa-brands fa-discord text-gray-900 dark:text-gray-300' />"
        },
        {
            title: "Telegram",
			text: "t.me/AunAli121",
			href: "https://t.me/AunAli121",
			ctaText: "Message",
			icon: "<i class='text-5xl fa-brands fa-telegram text-gray-900 dark:text-gray-300' />"
        },
        {
            title: "GitHub",
			text: "github.com/Aunali321",
			href: "https://github.com/Aunali321",
			ctaText: "Follow",
			icon: "<i class='text-5xl fa-brands fa-github text-gray-900 dark:text-gray-300' />"
        }
    ]

}