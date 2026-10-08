// =========================
// IMAGE IMPORTS
// =========================

// PROFESSIONAL
import sealPreview from "../../assets/images/Sertifikat SEAL.jpg";
import pisPreview from "../../assets/images/Sertifikat PIS.jpg";

// CERTIFICATES
import englishCertificate from "../../assets/images/English.jpg";

// AWARDS
import capstoneAward from "../../assets/images/capstone.jpg";

// =========================
// CHAPTER I
// Academic Journey
// =========================

export const academicJourney = [
    {
        id: 1,

        years: "2019 – 2022",

        title: {
            en: "State Senior High School 1 Sidayu",
            id: "SMA Negeri 1 Sidayu",
        },

        role: { en: "Initial Education", id: "Pendidikan Awal" },

        status: "Completed",

        description: {
            en: "Completed secondary education with a strong foundation in mathematics, science, and analytical thinking while actively participating in academic and extracurricular activities.",
            id: "Menyelesaikan pendidikan menengah dengan dasar yang kuat dalam matematika, sains, dan berpikir analitis, sekaligus aktif mengikuti kegiatan akademik maupun ekstrakurikuler.",
        },

        activities: [],
    },

    {
        id: 2,

        years: "2022 - 2026",

        title: {
            en: "State University of Malang",
            id: "Universitas Negeri Malang",
        },

        role: {
            en: "Bachelor of Informatics Engineering",
            id: "Sarjana Teknik Informatika",
        },

        status: "Completed",

        gpa: "3.82 / 4.00",

        description: {
            en: "Studied software engineering, artificial intelligence, web development, game development, human-computer interaction, and software engineering practices.",
            id: "Mempelajari rekayasa perangkat lunak, kecerdasan buatan, pengembangan web, pengembangan game, interaksi manusia-komputer, serta praktik rekayasa perangkat lunak.",
        },

        activities: [
            {
                title: {
                    en: "Committee Member (Event Division)",
                    id: "Anggota Kepanitiaan (Divisi Acara)",
                },

                organization: {
                    en: "CAPSTONE EXPO\nFaculty of Engineering",
                    id: "CAPSTONE EXPO\nFakultas Teknik",
                },

                points: [
                    {
                        en: "Managed event planning and execution for the campus expo.",
                        id: "Mengelola perencanaan dan pelaksanaan acara untuk expo kampus.",
                    },
                    {
                        en: "Coordinated with various stakeholders to ensure the event’s success.",
                        id: "Berkoordinasi dengan berbagai pihak terkait untuk memastikan kesuksesan acara.",
                    },
                ]
            }
        ]
    }
];

// =========================
// CHAPTER II
// Professional Journey
// =========================

export const professionalJourney = [
    {
        id: 1,

        years: "Feb 2025 – Jun 2025",

        title: "Social Economic Accelerator Lab (SEAL)",

        role: {
            en: "Intern Frontend Web Developer",
            id: "Magang Frontend Web Developer",
        },

        status: "Completed",

        mission: {
            en: "Contributed to the development of a government web application for the Southeast Sulawesi Tourism and Creative Economy Office by building responsive user interfaces and integrating frontend functionality with backend services.",
            id: "Berkontribusi dalam pengembangan aplikasi web pemerintah untuk Dinas Pariwisata dan Ekonomi Kreatif Sulawesi Tenggara dengan membangun antarmuka pengguna yang responsif serta mengintegrasikan fungsionalitas frontend dengan layanan backend.",
        },

        objectives: [
            {
                en: "Developed reusable React.js UI components for a government web application.",
                id: "Mengembangkan komponen antarmuka React.js yang dapat digunakan ulang untuk aplikasi web pemerintah.",
            },

            {
                en: "Integrated frontend modules with RESTful APIs and backend services.",
                id: "Mengintegrasikan modul frontend dengan RESTful API dan layanan backend.",
            },

            {
                en: "Implemented authentication, landing pages, user profiles, and dynamic forms.",
                id: "Menerapkan autentikasi, halaman landing, profil pengguna, dan formulir dinamis.",
            },

            {
                en: "Resolved frontend issues related to state synchronization, validation, and responsive layouts.",
                id: "Menyelesaikan masalah frontend terkait sinkronisasi state, validasi, dan tata letak responsif.",
            },

            {
                en: "Collaborated within an Agile development team alongside UI/UX designers and backend developers.",
                id: "Berkolaborasi dalam tim pengembangan Agile bersama desainer UI/UX dan pengembang backend.",
            },

            {
                en: "Completed intensive AngularJS training while contributing to technical documentation.",
                id: "Menyelesaikan pelatihan intensif AngularJS sekaligus berkontribusi pada dokumentasi teknis.",
            },
        ],

        tech: [
            "React",
            "AngularJS",
            "JavaScript",
            "Tailwind",
            "REST API",
            "Git",
            "Figma",
        ],

        images: [
            sealPreview,
            pisPreview,
        ],
    },
];

// =========================
// CHAPTER III
// Honors & Achievements
// =========================

export const honorsAchievements = [
    {
        id: 1,

        type: "Certificate",

        title: "English for IT Professionals",

        issuer: "LearnovaUM",

        year: "2024",

        description: {
            en: "Successfully completed the 'English for IT Professionals' course, focusing on English communication skills for software development, information technology, and professional workplace environments.",
            id: "Berhasil menyelesaikan kursus 'English for IT Professionals' yang berfokus pada keterampilan komunikasi bahasa Inggris untuk pengembangan perangkat lunak, teknologi informasi, dan lingkungan kerja profesional.",
        },

        image: englishCertificate,
    },

    {
        id: 2,

        type: "Award",

        title: {
            en: "Bronze Medal – International Capstone Expo 2024",
            id: "Medali Perunggu – International Capstone Expo 2024",
        },

        issuer: {
            en: "Department of Electrical Engineering and Informatics, State University of Malang",
            id: "Departemen Teknik Elektro dan Informatika, Universitas Negeri Malang",
        },

        year: "2024",

        description: {
            en: "Received the Bronze Award at the International Capstone Expo 2024 for the 'Isna Collection' project under the theme 'Technology for Society', recognizing innovation, teamwork, and practical software development.",
            id: "Meraih Penghargaan Perunggu pada International Capstone Expo 2024 untuk proyek 'Isna Collection' dengan tema 'Technology for Society', sebagai pengakuan atas inovasi, kerja sama tim, dan pengembangan perangkat lunak yang praktis.",
        },

        image: capstoneAward,
    },

    /*
    {
      id:3,
  
      type:"Award",
  
      title:"Best UI Design",
  
      issuer:"XYZ Competition",
  
      year:"2024",
  
      description:
        "Awarded for delivering the best user interface design among participating teams.",
  
      // image: uiAward,
    },
    */
];