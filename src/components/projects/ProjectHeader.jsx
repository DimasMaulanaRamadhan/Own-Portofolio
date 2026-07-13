import { motion } from "framer-motion";

const rankStyle = {
  Ultimate: {
    color: "text-yellow-300",
    border: "border-yellow-500/30",
    bg: "bg-yellow-500/10",
  },

  Hell: {
    color: "text-violet-300",
    border: "border-violet-500/30",
    bg: "bg-violet-500/10",
  },

  Nightmare: {
    color: "text-sky-300",
    border: "border-sky-500/30",
    bg: "bg-sky-500/10",
  },

  Normal: {
    color: "text-slate-300",
    border: "border-slate-500/30",
    bg: "bg-slate-500/10",
  },
};

export default function ProjectHeader({ project, open, index, onClick }) {
  const rank = rankStyle[project.rank] || rankStyle.Common;

  return (
    <button
      onClick={onClick}
      className="
        group
        w-full
        py-7
        flex
        items-center
        justify-between
        text-left
      "
    >
      {/* Left */}

      <div className="flex items-start gap-6">
        {/* Number */}

        <motion.div
          animate={{
            color: open ? "#E8C77A" : "#6f5a35",
          }}
          className="
            font-display
            text-4xl
            leading-none
            select-none
          "
        >
          {String(index + 1).padStart(2, "0")}
        </motion.div>

        {/* Info */}

        <div>
          <p
            className="
              text-[10px]
              uppercase
              tracking-[4px]
              text-gold/60
              mb-2
            "
          >
            Boss Archive
          </p>

          <motion.h3
            animate={{
              color: open ? "#F8E7B4" : "#DFC67A",
            }}
            className="
              font-display
              text-2xl
              mb-2
            "
          >
            {project.name}
          </motion.h3>

          <div className="flex flex-wrap gap-3 items-center">
            <span
              className="
                text-sm
                text-muted
              "
            >
              {project.category}
            </span>

            <span className="text-line">•</span>

            <span
              className="
                text-sm
                text-muted
              "
            >
              {project.year}
            </span>
          </div>
        </div>
      </div>

      {/* Right */}

      <div className="flex items-center gap-5">
        {/* Rank */}

        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className={`
            px-4
            py-2
            rounded-full
            border
            text-xs
            uppercase
            tracking-[3px]
            ${rank.color}
            ${rank.border}
            ${rank.bg}
          `}
        >
          {project.rank}
        </motion.div>

        {/* Arrow */}

        <motion.div
          animate={{
            rotate: open ? 90 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            text-gold
            text-3xl
          "
        >
          ›
        </motion.div>
      </div>
    </button>
  );
}
