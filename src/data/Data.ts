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
    description: string,
    tags: string[]
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
    about: "A 21-year-old developer from India with a passion for AI/ML, product development, and open source. My expertise spans machine learning, natural language processing, and building AI solutions. I'm constantly exploring new technologies and methodologies in the rapidly evolving field of AI, with a keen interest in developing products that solve real-world problems. Beyond AI, I enjoy reverse engineering, web scraping, scripting, and gaming.",
    orgs: [
        {
            name: "New Media Services",
            role: "AI/ML Engineer",
            logo: "https://scontent.famd18-1.fna.fbcdn.net/v/t39.30808-6/381142632_692704966211337_3709953787732150214_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=avsnKlwwuMUQ7kNvgEC2csT&_nc_oc=AdhiBz-8qPy2MMzh4dzCGonMY7Z6KkLOXi4FJeGPF_Djn-38Q2fU1AhKaghtwvSFLCg&_nc_zt=23&_nc_ht=scontent.famd18-1.fna&_nc_gid=A7yMrFkHjPM8zKL-le6Hn1b&oh=00_AYDoN4E-Z75C8BLT8XgNdqMtvPrRPV2bhAg19OOwJIT_BA&oe=67B14E2C",
            href: "https://newmediaservices.com.au"
        },
        {
            name: "ReVanced",
            role: "Core team member",
            logo: "https://avatars.githubusercontent.com/u/101597779?s=200&v=4",
            href: "https://revanced.app"
        }
    ],
    education: [
        {
            name: "Master of Computer Applications",
            href: "https:/vidhyanagari.org/",
            school: "Vidhyanagari Group of Institutions",
            timespan: "July 2024 - Present"
        },
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
            name: 'PyTorch',
            icon: `${baseIconsURL}/pytorch`,
            site: 'https://pytorch.org'
        },
        {
            name: 'Jupyter',
            icon: `${baseIconsURL}/jupyter`,
            site: 'https://jupyter.org'
        },
        {
            name: 'Unsloth',
            icon: `https://cdn-avatars.huggingface.co/v1/production/uploads/62ecdc18b72a69615d6bd857/E4lkPz1TZNLzIFr_dR273.png`,
            site: 'https://unsloth.ai'
        },
        {
            name: 'Huggingface',
            icon: `${baseIconsURL}/huggingface`,
            site: 'https://huggingface.co'
        },
        {
            name: 'Svelte',
            icon: `${baseIconsURL}/svelte`,
            site: 'https://svelte.dev'
        },
        {
            name: 'Javascript',
            icon: `${baseIconsURL}/javascript`,
            site: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        }
    ],
    projects: [
        {
            role: "Kepler Systems",
            href: "https://kepler.systems",
            timespan: "February 2025 - Present",
            short_description: "Building the future of AI through shared datasets, and open-source models.",
            external_links: [
                {
                    url: 'https://kepler.systems',
                    label: 'Website'
                },
                {
                    url: 'https://huggingface.co/keplersystems',
                    label: 'Hugging Face'
                },
                {
                    url: 'https://x.com/keplersystems',
                    label: 'Twitter / X'
                }
            ],
            tags: ["SvelteKit", "TailwindCSS"],
            description: "Kepler Systems is to contribute to fundamental AI research and development across various domains. Current projects within Kepler Systems include:<br> <strong>Poetry-Llama</strong>: State-of-the-Art Urdu Poetry Model: Our most recent project is Poetry-Llama, a cutting-edge LLM specifically fine-tuned for understanding and generating Urdu poetry.This 70-billion parameter model is trained on a diverse corpus of Urdu poetry and is openly available under the Llama license on Hugging Face. <br><br> <strong>Open Datasets for Urdu Poetry Research</strong>: Recognizing the importance of quality data in AI research, Kepler Systems curates and shares valuable datasets: <br> <strong>UrduShers-10k</strong>: A meticulously curated collection of 10,000 classical Urdu poetry couplets(shers) from diverse poets and eras, ensuring high quality and cultural representation.This dataset is licensed under CC BY-SA 4.0 for open use in research and creative projects. <br><strong>UrduGhazals-25k</strong>: A comprehensive dataset featuring 25,000 complete Urdu ghazals, encompassing a wide range of poets, eras, and dialects.This resource is also released under the CC BY-SA 4.0 license to promote open access and collaboration.",
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
    ],
    experience: [
        {
            role: "AI/ML Engineer · New Media Services (Formerly InvestBrains)",
            href: "https://newmediaservices.com.au/",
            timespan: "June 2024 - Present",
            external_links: [
                {
                    url: 'https://newmediaservices.com.au',
                    label: 'Website'
                },
            ],
            description: `
            • <strong>Content Moderation Leadership:</strong> Led the development and deployment of advanced moderation solutions, utilizing vision models to create and maintain a robust Moderation API. This initiative proactively addressed harmful content across platforms, ensuring user safety and responsible AI application. <br><br>
            • <strong>Large Language Model (LLM) Optimization & Fine-tuning:</strong> Specialized in fine-tuning and optimizing LLMs for diverse applications, including creating engaging role-play scenarios and developing effective question-answering systems. Work focused on significantly improving model performance and accuracy for specific use cases relevant to content generation and user interaction. <br><br>
            • <strong>Reinforcement Learning for Model Alignment:</strong> Implemented Reinforcement Learning techniques, including Direct Preference Optimization (DPO), to refine LLM outputs and align them with user preferences. This resulted in enhanced output quality, improved user satisfaction, and AI-driven experiences more closely aligned with user expectations. <br><br>
            • <strong>Generative AI & Diffusion Models:</strong> Pioneered the application of diffusion models, particularly Stable Diffusion, for custom image generation tasks. This involved fine-tuning models, creating specialized image generation solutions, and curating datasets to support diverse image generation needs, expanding the company's generative AI capabilities. <br><br>
            • <strong>Automation & Infrastructure Development:</strong> Developed and maintained critical automation scripts to streamline AI development workflows. This included automation for LLM hosting, comprehensive benchmarking processes, and synthetic data generation, significantly improving team efficiency and development lifecycle management. <br><br>
            • <strong>Text-to-Speech (TTS) Innovation:</strong> Designed and implemented a Text-to-Speech (TTS) system for dialog applications, incorporating voice cloning technology and leveraging FastAPI for efficient deployment and scalability. <br><br>
            `,
            tags: ['Python', 'PyTorch', 'HF Transformers/Diffusers/Datasets', 'Axolotl', 'Unsloth', 'TRL'],
        },
        {
            role: "Core Software Developer · ReVanced",
            href: "https://revanced.app",
            timespan: "May 2022 - July 2024",
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
            tags: ['Flutter', 'Dart', 'Kotlin', 'JADX'],
        }
    ],
    contact_links: [
        {
            title: "Mail",
            text: "hello@auna.li",
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
        // {
        //     title: "Telegram",
        //     text: "t.me/AunAli121",
        //     href: "https://t.me/AunAli121",
        //     ctaText: "Message",
        //     icon: "<i class='text-5xl fa-brands fa-telegram text-gray-900 dark:text-gray-300' />"
        // },
        {
            title: "GitHub",
            text: "github.com/Aunali321",
            href: "https://github.com/Aunali321",
            ctaText: "Follow",
            icon: "<i class='text-5xl fa-brands fa-github text-gray-900 dark:text-gray-300' />"
        },
        {
            title: "Twitter",
            text: "@XCossale",
            href: "https://x.com/cossale",
            ctaText: "Follow",
            icon: "<i class='text-5xl fa-brands fa-twitter text-gray-900 dark:text-gray-300' />"
        }
    ]

}