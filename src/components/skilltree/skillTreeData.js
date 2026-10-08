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

            title: { en: "Web Development", id: "Pengembangan Web" },

            category: { en: "Main Branch", id: "Cabang Utama" },

            x: 120,
            y: 300,

            r: 26,

            fontSize: 14,

            delay: 0.1,

            description: {
                en: "Developing responsive and scalable web applications with modern frontend and backend technologies.",
                id: "Mengembangkan aplikasi web yang responsif dan skalabel dengan teknologi frontend dan backend modern.",
            },

            usedIn: [
                {
                    en: "Government Tourism Website",
                    id: "Website Pariwisata Pemerintah",
                },
                "SIPETI",
                "PTN Connect",
                {
                    en: "Portfolio Website",
                    id: "Website Portofolio",
                },
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

            category: { en: "Web Development", id: "Pengembangan Web" },

            x: 40,
            y: 500,

            r: 20,

            fontSize: 10,

            delay: 0.2,

            description: {
                en: "Used to build reusable user interfaces, component-based architecture, responsive layouts, and dynamic web applications.",
                id: "Digunakan untuk membangun antarmuka pengguna yang dapat digunakan ulang, arsitektur berbasis komponen, tata letak responsif, dan aplikasi web dinamis.",
            },

            usedIn: [
                {
                    en: "Government Tourism Website",
                    id: "Website Pariwisata Pemerintah",
                },
                {
                    en: "Portfolio Website",
                    id: "Website Portofolio",
                },
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

            category: { en: "Web Development", id: "Pengembangan Web" },

            x: 120,
            y: 500,

            r: 20,

            fontSize: 10,

            delay: 0.25,

            description: {
                en: "PHP framework used for backend development, authentication, routing, and RESTful API implementation.",
                id: "Framework PHP yang digunakan untuk pengembangan backend, autentikasi, routing, dan implementasi RESTful API.",
            },

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

            category: { en: "Programming Language", id: "Bahasa Pemrograman" },

            x: 200,
            y: 500,

            r: 20,

            fontSize: 10,

            delay: 0.3,

            description: {
                en: "Backend programming language primarily used with Laravel for developing web applications.",
                id: "Bahasa pemrograman backend yang terutama digunakan bersama Laravel untuk mengembangkan aplikasi web.",
            },

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

        {
            id: "angularjs",

            group: "web",

            label: "Angular",

            title: "AngularJS",

            category: { en: "Web Framework", id: "Framework Web" },

            x: 50,

            y: 660,

            r: 18,

            fontSize: 9,

            delay: 0.65,

            description: {
                en: "Gained hands-on experience with AngularJS during an intensive training program while interning at SEAL, contributing to frontend features and technical documentation.",
                id: "Memperoleh pengalaman langsung dengan AngularJS selama program pelatihan intensif saat magang di SEAL, dengan berkontribusi pada fitur frontend dan dokumentasi teknis.",
            },

            usedIn: [
                {
                    en: "Government Tourism Website",
                    id: "Website Pariwisata Pemerintah",
                },
            ],

            related: [
                "JavaScript",
                "React",
                "REST API",
            ],
        },

        {
            id: "figma",

            group: "web",

            label: "Figma",

            title: "Figma",

            category: { en: "UI/UX Design", id: "Desain UI/UX" },

            x: 190,

            y: 660,

            r: 18,

            fontSize: 9,

            delay: 0.7,

            description: {
                en: "Designing user interfaces, wireframes, and interactive prototypes to support user-centered web and application development.",
                id: "Merancang antarmuka pengguna, wireframe, dan prototipe interaktif untuk mendukung pengembangan web dan aplikasi yang berpusat pada pengguna.",
            },

            usedIn: [
                {
                    en: "Government Tourism Website",
                    id: "Website Pariwisata Pemerintah",
                },
                {
                    en: "Portfolio Website",
                    id: "Website Portofolio",
                },
            ],

            related: [
                "UI/UX Design",
                "React",
            ],
        },

        // ================= GAME =================

        {
            id: "game",

            group: "game",

            label: "Game",

            title: { en: "Game Development", id: "Pengembangan Game" },

            category: { en: "Main Branch", id: "Cabang Utama" },

            x: 360,
            y: 300,

            r: 26,

            fontSize: 14,

            delay: 0.15,

            description: {
                en: "Designing gameplay systems and developing interactive experiences using modern game engines.",
                id: "Merancang sistem gameplay dan mengembangkan pengalaman interaktif menggunakan game engine modern.",
            },

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

            category: { en: "Game Engine", id: "Game Engine" },

            x: 280,
            y: 500,

            r: 20,

            fontSize: 10,

            delay: 0.35,

            description: {
                en: "Developed gameplay mechanics, interaction systems, and RPG features using Unity.",
                id: "Mengembangkan mekanik gameplay, sistem interaksi, dan fitur RPG menggunakan Unity.",
            },

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

            category: { en: "Game Engine", id: "Game Engine" },

            x: 360,
            y: 500,

            r: 20,

            fontSize: 10,

            delay: 0.4,

            description: {
                en: "Used Roblox Studio to develop gameplay systems and mechanics for educational simulation games.",
                id: "Menggunakan Roblox Studio untuk mengembangkan sistem dan mekanik gameplay untuk game simulasi edukatif.",
            },

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

            category: { en: "3D Modeling", id: "Pemodelan 3D" },

            x: 440,
            y: 500,

            r: 20,

            fontSize: 10,

            delay: 0.45,

            description: {
                en: "Creating and editing simple 3D assets used within Unity projects.",
                id: "Membuat dan menyunting aset 3D sederhana yang digunakan dalam proyek Unity.",
            },

            usedIn: [
                "Hanacaraka Quest",
            ],

            related: [
                "Unity",
            ],
        },

        {
            id: "csharp",

            group: "game",

            label: "C#",

            title: "C#",

            category: { en: "Programming Language", id: "Bahasa Pemrograman" },

            x: 320,

            y: 660,

            r: 18,

            fontSize: 9,

            delay: 0.75,

            description: {
                en: "Primary language used in Unity to implement gameplay mechanics, interaction systems, and core RPG features for Hanacaraka Quest.",
                id: "Bahasa utama yang digunakan di Unity untuk mengimplementasikan mekanik gameplay, sistem interaksi, dan fitur RPG inti pada Hanacaraka Quest.",
            },

            usedIn: [
                "Hanacaraka Quest",
            ],

            related: [
                "Unity",
                "Gameplay Programming",
            ],
        },

        // ================= AI =================

        {
            id: "ai",

            group: "ai",

            label: "AI",

            title: { en: "AI & Data", id: "AI & Data" },

            category: { en: "Main Branch", id: "Cabang Utama" },

            x: 600,
            y: 300,

            r: 26,

            fontSize: 14,

            delay: 0.2,

            description: {
                en: "Applying artificial intelligence, machine learning, and data analysis techniques to solve practical problems.",
                id: "Menerapkan teknik kecerdasan buatan, machine learning, dan analisis data untuk menyelesaikan masalah praktis.",
            },

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

            category: { en: "Programming Language", id: "Bahasa Pemrograman" },

            x: 520,
            y: 500,

            r: 20,

            fontSize: 10,

            delay: 0.5,

            description: {
                en: "Used for data processing, statistical analysis, and machine learning experiments.",
                id: "Digunakan untuk pengolahan data, analisis statistik, dan eksperimen machine learning.",
            },

            usedIn: [
                "SIPETI",
                {
                    en: "Research",
                    id: "Riset",
                },
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

            title: { en: "Machine Learning", id: "Machine Learning" },

            category: { en: "Artificial Intelligence", id: "Kecerdasan Buatan" },

            x: 600,
            y: 500,

            r: 20,

            fontSize: 10,

            delay: 0.55,

            description: {
                en: "Experience building prediction and clustering models for academic projects.",
                id: "Pengalaman membangun model prediksi dan klasterisasi untuk proyek akademik.",
            },

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

            title: { en: "Prompt Engineering", id: "Prompt Engineering" },

            category: { en: "Generative AI", id: "AI Generatif" },

            x: 680,
            y: 500,

            r: 20,

            fontSize: 10,

            delay: 0.6,

            description: {
                en: "Using LLMs and AI-assisted workflows to improve productivity during software development.",
                id: "Memanfaatkan LLM dan alur kerja berbantuan AI untuk meningkatkan produktivitas selama pengembangan perangkat lunak.",
            },

            usedIn: [
                {
                    en: "Daily Development",
                    id: "Pengembangan Sehari-hari",
                },
            ],

            related: [
                "Python",
                "Machine Learning",
            ],
        },

        {
            id: "tensorflow",

            group: "ai",

            label: "TF",

            title: { en: "TensorFlow / PyTorch", id: "TensorFlow / PyTorch" },

            category: {
                en: "Machine Learning Framework",
                id: "Framework Machine Learning",
            },

            x: 600,

            y: 660,

            r: 18,

            fontSize: 9,

            delay: 0.8,

            description: {
                en: "Used machine learning frameworks to build and train prediction models for heart health analysis in the SIPETI project.",
                id: "Menggunakan framework machine learning untuk membangun dan melatih model prediksi analisis kesehatan jantung pada proyek SIPETI.",
            },

            usedIn: [
                "SIPETI",
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
        ["web", "angularjs"],
        ["web", "figma"],

        ["game", "unity"],
        ["game", "roblox"],
        ["game", "blender"],
        ["unity", "csharp"],

        ["ai", "python"],
        ["ai", "ml"],
        ["ai", "prompt"],
        ["ml", "tensorflow"],
    ],
};

export default skillTreeData;