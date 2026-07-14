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

        title: "State Senior High School 1 Sidayu",

        role: "Initial Education",

        status: "Completed",

        description:
            "Completed secondary education with a strong foundation in mathematics, science, and analytical thinking while actively participating in academic and extracurricular activities.",

        activities: [],
    },

    {
        id: 2,

        years: "2022 - 2026",

        title: "State University of Malang",

        role: "Bachelor of Informatics Engineering",

        status: "Completed",

        gpa: "3.82 / 4.00",

        description:
            "Studied software engineering, artificial intelligence, web development, game development, human-computer interaction, and software engineering practices.",

        activities: [
            {
                title: "Committee Member (Event Division)",

                organization: "CAPSTONE EXPO\nFaculty of Engineering",

                points: [
                    "Managed event planning and execution for the campus expo.",
                    "Coordinated with various stakeholders to ensure the event’s success."
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

        role: "Intern Frontend Web Developer",

        status: "Completed",

        mission:
            "Contributed to the development of a government web application for the Southeast Sulawesi Tourism and Creative Economy Office by building responsive user interfaces and integrating frontend functionality with backend services.",

        objectives: [
            "Developed reusable React.js UI components for a government web application.",

            "Integrated frontend modules with RESTful APIs and backend services.",

            "Implemented authentication, landing pages, user profiles, and dynamic forms.",

            "Resolved frontend issues related to state synchronization, validation, and responsive layouts.",

            "Collaborated within an Agile development team alongside UI/UX designers and backend developers.",

            "Completed intensive AngularJS training while contributing to technical documentation.",
        ],

        tech: [
            "React",
            "JavaScript",
            "REST API",
            "Git",
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

        description:
            "Successfully completed the 'English for IT Professionals' course, focusing on English communication skills for software development, information technology, and professional workplace environments.",

        image: englishCertificate,
    },

    {
        id: 2,

        type: "Award",

        title: "Bronze Medal - International Capstone Expo 2024",

        issuer:
            "Department of Electrical Engineering and Informatics, Universitas Negeri Malang",

        year: "2024",

        description:
            "Received the Bronze Award at the International Capstone Expo 2024 for the 'Isna Collection' project under the theme 'Technology for Society', recognizing innovation, teamwork, and practical software development.",

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