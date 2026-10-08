import isnaCollection from "../../assets/images/isna-collection.png";
import isnaCollection2 from "../../assets/images/isna-collection2.png";
import ptnConnect1 from "../../assets/images/ptn-connect.png";
import ptnConnect2 from "../../assets/images/ptn-connect2.png";
import sipeti1 from "../../assets/images/sipeti.png";
import sipeti2 from "../../assets/images/sipeti2.png";
import bisnisKu1 from "../../assets/images/bisnisku.png";
import bisnisKu2 from "../../assets/images/bisnisku2.png";
import hanacarakaQuest1 from "../../assets/images/hanacaraka-quest.png";
import hanacarakaQuest2 from "../../assets/images/hanacaraka-quest2.png";
import theTani1 from "../../assets/images/the-tani.png";
import theTani2 from "../../assets/images/the-tani2.png";

const projects = [
  {
    id: 1,

    name: "Hanacaraka Quest",

    category: { en: "Game Development", id: "Pengembangan Game" },

    role: { en: "Gameplay Programmer", id: "Gameplay Programmer" },

    rank: "Ultimate",

    platform: "Windows",

    year: "2024",

    start: "Nov 2024",

    end: "Dec 2024",

    status: "Completed",

    images: [hanacarakaQuest1, hanacarakaQuest2],

    tech: ["Unity", "C#", "Blender", "Git"],

    detail: {
      en: "A 3D RPG game designed to introduce players to the Javanese script through immersive exploration, action-based combat, and puzzle-solving gameplay. The game features quest progression, inventory management, character progression, and interactive learning mechanics that combine entertainment with cultural education.",
      id: "Game RPG 3D yang dirancang untuk memperkenalkan aksara Jawa kepada pemain melalui eksplorasi imersif, pertarungan berbasis aksi, dan gameplay pemecahan teka-teki. Game ini menghadirkan progresi misi, manajemen inventaris, pengembangan karakter, dan mekanik pembelajaran interaktif yang memadukan hiburan dengan edukasi budaya.",
    },
  },

  {
    id: 2,

    name: "The Tani",

    category: { en: "Game Development", id: "Pengembangan Game" },

    role: {
      en: "Gameplay Programmer, Game Designer",
      id: "Gameplay Programmer, Perancang Game",
    },

    rank: "Ultimate",

    platform: "Windows",

    year: "2025",

    start: "Sep 2025",

    end: "Dec 2025",

    status: "Completed",

    images: [theTani1, theTani2],

    tech: ["Roblox Studio", "Luau"],

    link: "https://www.roblox.com/id/games/110896719203315/The-Tani",

    detail: {
      en: "A 3D farming simulation RPG that introduces sustainable agriculture through immersive gameplay and strategic farm management. The game features crop cultivation, soil health monitoring, technology progression, dynamic market systems, and ecosystem management to provide an engaging and educational farming experience.",
      id: "Game RPG simulasi pertanian 3D yang memperkenalkan pertanian berkelanjutan melalui gameplay imersif dan manajemen peternakan yang strategis. Game ini menghadirkan budidaya tanaman, pemantauan kesehatan tanah, progresi teknologi, sistem pasar dinamis, dan pengelolaan ekosistem untuk menghadirkan pengalaman bertani yang menarik sekaligus edukatif.",
    },
  },

  {
    id: 3,

    name: "SIPETI",

    category: { en: "AI & Web Development", id: "AI & Pengembangan Web" },

    role: { en: "Frontend Developer", id: "Frontend Developer" },

    rank: "Nightmare",

    platform: "Web",

    year: "2024",

    start: "May 2024",

    end: "Jun 2024",

    status: "Completed",

    images: [sipeti1, sipeti2],

    tech: ["Python", "TensorFlow", "JavaScript", "HTML", "CSS"],

    detail: {
      en: "A health-focused system powered by machine learning, designed to analyze and predict heart health conditions. It includes health tracking, goal setting, and reporting features, providing users with actionable insights for proactive health management.",
      id: "Sistem yang berfokus pada kesehatan dan didukung machine learning, dirancang untuk menganalisis serta memprediksi kondisi kesehatan jantung. Sistem ini mencakup pelacakan kesehatan, penetapan target, dan fitur pelaporan, sehingga pengguna memperoleh wawasan yang dapat ditindaklanjuti untuk pengelolaan kesehatan yang proaktif.",
    },
  },

  {
    id: 4,

    name: "PTN-Connect",

    category: { en: "Web Development", id: "Pengembangan Web" },

    role: { en: "Frontend Developer", id: "Frontend Developer" },

    rank: "Hell",

    platform: "Web",

    year: "2023",

    start: "Mar 2023",

    end: "May 2023",

    status: "Completed",

    images: [ptnConnect1, ptnConnect2],

    tech: ["Laravel", "MySQL", "JavaScript", "HTML", "CSS"],

    detail: {
      en: "An interactive application leveraging the K-Means clustering algorithm to assist high school students in selecting suitable majors based on their preferences, academic performance, and aspirations. The application offers personalized recommendations and intuitive visualizations for better decision-making.",
      id: "Aplikasi interaktif yang memanfaatkan algoritma klasterisasi K-Means untuk membantu siswa SMA memilih jurusan yang sesuai berdasarkan minat, prestasi akademik, dan cita-citanya. Aplikasi ini menawarkan rekomendasi yang dipersonalisasi serta visualisasi yang intuitif untuk pengambilan keputusan yang lebih baik.",
    },
  },

  {
    id: 5,

    name: "BisnisKu",

    category: { en: "Web Development", id: "Pengembangan Web" },

    role: { en: "Frontend Developer", id: "Frontend Developer" },

    rank: "Normal",

    platform: "Web",

    year: "2024",

    start: "Oct 2024",

    end: "Nov 2024",

    status: "Archived",

    images: [bisnisKu2, bisnisKu1],

    tech: ["Laravel", "Shopify", "JavaScript", "HTML", "CSS"],

    detail: {
      en: "A Shopify-based system that simplifies website creation for small businesses and entrepreneurs. It offers customizable templates, integrated payment options, analytics tracking, and user support, enabling businesses to establish a strong online presence efficiently.",
      id: "Sistem berbasis Shopify yang menyederhanakan pembuatan website untuk usaha kecil dan wirausaha. Sistem ini menyediakan template yang dapat disesuaikan, opsi pembayaran terintegrasi, pelacakan analitik, dan dukungan pengguna, sehingga pelaku usaha dapat membangun kehadiran online yang kuat secara efisien.",
    },
  },

  {
    id: 6,

    name: "Isna Collection",

    category: { en: "Web Development", id: "Pengembangan Web" },

    role: { en: "Full Stack Developer", id: "Full Stack Developer" },

    rank: "Nightmare",

    platform: "Web",

    year: "2024",

    start: "Feb 2024",

    end: "May 2024",

    status: "Completed",

    images: [isnaCollection, isnaCollection2],

    tech: ["Laravel", "MySQL", "HTML", "CSS", "JavaScript"],

    detail: {
      en: "A user-friendly website designed to promote and showcase clothing tailoring services. The platform features a responsive design, appointment booking, portfolio display, and customer review functionality to enhance user engagement and business visibility.",
      id: "Website ramah pengguna yang dirancang untuk mempromosikan dan menampilkan jasa penjahitan pakaian. Platform ini menghadirkan desain responsif, pemesanan janji temu, galeri portofolio, dan fitur ulasan pelanggan untuk meningkatkan keterlibatan pengguna serta visibilitas usaha.",
    },
  },
];

export default projects;
