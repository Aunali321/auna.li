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

let baseIconsURL = 'https://cdn.simpleicons.org';


export let user: User = {
    name: "Aunali K.",
    nameWithoutSuffix: "Aunali",
    role: "Technologist with a passion for building.",
    nickname: "Cossale",
    ed: "Computer Science Student",
    about: "A 20 year old developer from India. I'm very passionate about flutter, reverse engineering, open source and all sorts of music. <br /> <br /> My interests include Machine learning, Reverse engineering, Web scraping, Bash scripting, and Automation.",
    orgs: [
        {
            name: "ReVanced",
            role: "Core team member",
            logo: "https://avatars.githubusercontent.com/u/101597779?s=200&v=4",
            href: "https://revanced.app"
        },
        {
            name: "Invest Brains",
            role: "AI/ML Engineer",
            logo: "https://assets-global.website-files.com/6548eec3020d3ae5296193cc/6548f7b6e5e089a5b706c198_4c80a7a7aa69339a083019426d2212b0.gif",
            href: "https://investbrains.net"
        },
    ],
    education: [
        {
            name: "Bachelor of Computer Applications",
            href: "https://maktabahjafariyah.org/",
            school: "Maktabah Jafariyah Knowledge & Research Academy",
            timespan: "September 2021 - March 2024"
        }
    ],
    skills: [
        {
            name: 'Python',
            icon: `${baseIconsURL}/python`,
            site: 'https://python.org'
        },
        {
            name: 'Svelte',
            icon: `${baseIconsURL}/svelte`,
            site: 'https://svelte.dev'
        },
        {
            name: 'Flutter',
            icon: `${baseIconsURL}/flutter`,
            site: 'https://flutter.dev'
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
            name: 'Jetpack Compose',
            icon: `${baseIconsURL}/jetpackcompose`,
            site: 'https://developer.android.com/jetpack/compose'
        }
    ],
    projects: [
        {
            role: "SentiraAI",
            href: "https://sentiraai.com",
            timespan: "September 2023 - March 2024",
            short_description: "AI for audio/video transcription and text summarization.",
            external_links: [
                {
                    url: 'https://sentiraai.com',
                    label: 'SentiraAI'
                },
            ],
            tags: ["Node.js", "Express", "SvelteKit", "Supabase", "TailwindCSS",],
            description: "SentiraAI is a platform leveraging AI for audio/video transcription and text summarization. It is built using Node.js/Express for the API, SvelteKit for the web app, and integrates AI services like Deepgram and Cohere for transcription and summarization capabilities. It also includes authentication using API keys and session management with Supabase. It has a user-friendly interface for file uploads, viewing transcripts/summaries, and account management. It also includes Stripe for payment processing. It has Telegram and Discord bots connected to the SentiraAI API, enabling users to access transcription and summarization features within their messaging apps. It also includes cross-browser extensions (Chrome, Firefox, Safari) using JavaScript, allowing users to transcribe and summarize web content directly. It is documented using VitePress.",
        },
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
            description: `• Worked with a globally distributed team of 15 developers to build ReVanced, an open-source Android modification framework empowering users to customize apps to suit their needs. <br > <br >
                    • I helped spearhead overall architecture, design, and roadmapping - devising an  adaptable core to enable endless customizations for apps built on Dalvik like YouTube. I also directly contributed extensive code across the codebase. <br > <br >
                    • I led development of the ReVanced Manager app installed by over 170K users. The app streamlined installations and made core functionality easily accessible. <br > <br >
                    • Initially adopted by a few hundred users, ReVanced gathered incredible traction on platforms like Reddit, Discord and Telegram from folks who really liked what we built. <br > <br >
                    • As installs grew exponentially to 170,000+, I took on expanded duties - overseeing roadmap priorities, debugging complex issues, liaising with user communities, and ensuring stability through rigorous testing. <br > <br >
                    • The project gave me hands-on experience on how coordinated remote teams can build delightful products loved by users globally. Debugging performance problems taught me how to approach issues methodically. Ultimately, the ability to solve real user problems at scale was extremely fulfilling.`,
        },
        {
            role: "AI/ML Engineer · Invest Brains",
            href: "https://investbrains.net",
            timespan: "June 2024 - Present",
            external_links: [
                {
                    url: 'https://investbrains.net',
                    label: 'Website'
                },
            ],
            description: `
                • Fine-tuned LLMs for specific tasks like role-play, question-answering. <br > <br >
                • Fine-tuned diffusion models like Stable Diffusion for image generation on custom datasets. <br > <br >
                • Developed a custom dataset for image generation using diffusion models. <br > <br >
                • And planning to work on more projects in the future!`
        },
    ],
    contact_links: [
        {
            title: "Mail",
            text: "hello@auna.li\ncossale@revanced.app",
            href: "mailto:hello@auna.li",
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