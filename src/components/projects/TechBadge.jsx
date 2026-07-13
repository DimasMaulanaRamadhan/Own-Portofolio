import { motion } from "framer-motion";

import {
  FaReact,
  FaLaravel,
  FaUnity,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiBlender,
  SiShopify,
  SiVite,
} from "react-icons/si";

const techMap = {
  React: {
    icon: FaReact,
    color: "text-cyan-400",
  },

  Laravel: {
    icon: FaLaravel,
    color: "text-red-500",
  },

  PHP: {
    icon: FaPhp,
    color: "text-indigo-300",
  },

  MySQL: {
    icon: SiMysql,
    color: "text-sky-400",
  },

  Tailwind: {
    icon: SiTailwindcss,
    color: "text-cyan-400",
  },

  JavaScript: {
    icon: SiJavascript,
    color: "text-yellow-300",
  },

  HTML: {
    icon: FaHtml5,
    color: "text-orange-500",
  },

  CSS: {
    icon: FaCss3Alt,
    color: "text-blue-500",
  },

  Unity: {
    icon: FaUnity,
    color: "text-gray-200",
  },

  Blender: {
    icon: SiBlender,
    color: "text-orange-400",
  },

  Shopify: {
    icon: SiShopify,
    color: "text-green-400",
  },

  Git: {
    icon: FaGitAlt,
    color: "text-orange-500",
  },

  Vite: {
    icon: SiVite,
    color: "text-violet-400",
  },
};

export default function TechBadge({ name }) {
  const tech = techMap[name];
  const Icon = tech?.icon;

  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.06,
      }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 18,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-lg
        border
        border-gold/20
        bg-[#171311]
        px-4
        py-2
        transition-all
        duration-300
        hover:border-gold/60
        hover:shadow-[0_0_20px_rgba(255,204,120,.15)]
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-transparent
          via-gold/5
          to-transparent
          -translate-x-full
          group-hover:translate-x-full
          transition-transform
          duration-700
        "
      />

      <div className="relative flex items-center gap-2">
        {Icon && <Icon className={`text-lg ${tech.color}`} />}

        <span
          className="
            text-sm
            text-parchment
            tracking-wide
          "
        >
          {name}
        </span>
      </div>
    </motion.div>
  );
}
