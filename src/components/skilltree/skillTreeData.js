const skillTreeData = {
    nodes: [
        // ================= ROOT =================

        {
            id: "you",
            group: "root",

            label: "Skills",

            title: null,

            x: 360,
            y: 60,

            r: 34,

            fontSize: 16,

            delay: 0,
        },

        // ================= WEB =================

        {
            id: "web",

            group: "web",

            label: "Web",

            title: "Web Development",

            category: "Main Branch",

            x: 120,
            y: 300,

            r: 26,

            fontSize: 14,

            delay: 0.1,

            description:
                "Developing responsive and scalable web applications with modern frontend and backend technologies.",

            usedIn: [
                "Government Tourism Website",
                "SIPETI",
                "PTN Connect",
                "Portfolio Website",
                "Isna Collection",
            ],

            related: [
                "React",
                "Laravel",
                "PHP",
                "MySQL",
            ],
        },

        {
            id: "react",

            group: "web",

            label: "React",

            title: "React.js",

            category: "Web Development",

            x: 40,
            y: 500,

            r: 20,

            fontSize: 10,

            delay: 0.2,

            description:
                "Used to build reusable user interfaces, component-based architecture, responsive layouts, and dynamic web applications.",

            usedIn: [
                "Government Tourism Website",
                "Portfolio Website",
                "SIPETI",
            ],

            related: [
                "JavaScript",
                "REST API",
                "Tailwind CSS",
            ],
        },

        {
            id: "laravel",

            group: "web",

            label: "Laravel",

            title: "Laravel",

            category: "Web Development",

            x: 120,
            y: 500,

            r: 20,

            fontSize: 10,

            delay: 0.25,

            description:
                "PHP framework used for backend development, authentication, routing, and RESTful API implementation.",

            usedIn: [
                "SIPETI",
                "PTN Connect",
                "Isna Collection",
            ],

            related: [
                "PHP",
                "MySQL",
                "REST API",
            ],
        },

        {
            id: "php",

            group: "web",

            label: "PHP",

            title: "PHP",

            category: "Programming Language",

            x: 200,
            y: 500,

            r: 20,

            fontSize: 10,

            delay: 0.3,

            description:
                "Backend programming language primarily used with Laravel for developing web applications.",

            usedIn: [
                "SIPETI",
                "PTN Connect",
                "Isna Collection",
            ],

            related: [
                "Laravel",
                "MySQL",
            ],
        },

        // ================= GAME =================

        {
            id: "game",

            group: "game",

            label: "Game",

            title: "Game Development",

            category: "Main Branch",

            x: 360,
            y: 300,

            r: 26,

            fontSize: 14,

            delay: 0.15,

            description:
                "Designing gameplay systems and developing interactive experiences using modern game engines.",

            usedIn: [
                "Hanacaraka Quest",
                "The Tani",
            ],

            related: [
                "Unity",
                "Roblox Studio",
                "Blender",
            ],
        },

        {
            id: "unity",

            group: "game",

            label: "Unity",

            title: "Unity",

            category: "Game Engine",

            x: 280,
            y: 500,

            r: 20,

            fontSize: 10,

            delay: 0.35,

            description:
                "Developed gameplay mechanics, interaction systems, and RPG features using Unity.",

            usedIn: [
                "Hanacaraka Quest",
            ],

            related: [
                "Blender",
                "Gameplay Programming",
            ],
        },

        {
            id: "roblox",

            group: "game",

            label: "Roblox",

            title: "Roblox Studio",

            category: "Game Engine",

            x: 360,
            y: 500,

            r: 20,

            fontSize: 10,

            delay: 0.4,

            description:
                "Used Roblox Studio to develop gameplay systems and mechanics for educational simulation games.",

            usedIn: [
                "The Tani",
            ],

            related: [
                "Luau",
                "Game Design",
                "Gameplay Programming",
            ],
        },

        {
            id: "blender",

            group: "game",

            label: "Blender",

            title: "Blender",

            category: "3D Modeling",

            x: 440,
            y: 500,

            r: 20,

            fontSize: 10,

            delay: 0.45,

            description:
                "Creating and editing simple 3D assets used within Unity projects.",

            usedIn: [
                "Hanacaraka Quest",
            ],

            related: [
                "Unity",
            ],
        },

        // ================= AI =================

        {
            id: "ai",

            group: "ai",

            label: "AI",

            title: "AI & Data",

            category: "Main Branch",

            x: 600,
            y: 300,

            r: 26,

            fontSize: 14,

            delay: 0.2,

            description:
                "Applying artificial intelligence, machine learning, and data analysis techniques to solve practical problems.",

            usedIn: [
                "SIPETI",
                "PTN Connect",
            ],

            related: [
                "Python",
                "Machine Learning",
                "Prompt Engineering",
            ],
        },

        {
            id: "python",

            group: "ai",

            label: "Python",

            title: "Python",

            category: "Programming Language",

            x: 520,
            y: 500,

            r: 20,

            fontSize: 10,

            delay: 0.5,

            description:
                "Used for data processing, statistical analysis, and machine learning experiments.",

            usedIn: [
                "SIPETI",
                "Research",
            ],

            related: [
                "Machine Learning",
                "Prompt Engineering",
            ],
        },

        {
            id: "ml",

            group: "ai",

            label: "ML",

            title: "Machine Learning",

            category: "Artificial Intelligence",

            x: 600,
            y: 500,

            r: 20,

            fontSize: 10,

            delay: 0.55,

            description:
                "Experience building prediction and clustering models for academic projects.",

            usedIn: [
                "SIPETI",
                "PTN Connect",
            ],

            related: [
                "Python",
            ],
        },

        {
            id: "prompt",

            group: "ai",

            label: "Prompt",

            title: "Prompt Engineering",

            category: "Generative AI",

            x: 680,
            y: 500,

            r: 20,

            fontSize: 10,

            delay: 0.6,

            description:
                "Using LLMs and AI-assisted workflows to improve productivity during software development.",

            usedIn: [
                "Daily Development",
            ],

            related: [
                "Python",
                "Machine Learning",
            ],
        },
    ],

    edges: [
        ["you", "web"],
        ["you", "game"],
        ["you", "ai"],

        ["web", "react"],
        ["web", "laravel"],
        ["web", "php"],

        ["game", "unity"],
        ["game", "roblox"],
        ["game", "blender"],

        ["ai", "python"],
        ["ai", "ml"],
        ["ai", "prompt"],
    ],
};

export default skillTreeData;