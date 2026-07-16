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
  const rank = rankStyle[project.rank] || rankStyle.Normal;

  return (
    <button
      onClick={onClick}
      className="
        group
        w-full
        py-6
        flex
        items-start
        justify-between
        gap-4
        text-left
      "
    >
      {/* ================= LEFT ================= */}

      <div className="flex flex-1 min-w-0 items-start gap-4 md:gap-6">
        {/* Number */}

        <motion.div
          animate={{
            color: open ? "#E8C77A" : "#6f5a35",
          }}
          className="
            shrink-0
            font-display
            text-3xl
            md:text-4xl
            leading-none
            select-none
          "
        >
          {String(index + 1).padStart(2, "0")}
        </motion.div>

        {/* Info */}

        <div className="min-w-0 flex-1">
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
              text-xl
              md:text-2xl
              leading-snug
              break-words
              mb-2
            "
          >
            {project.name}
          </motion.h3>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-sm text-muted">
              {project.category}
            </span>

            <span className="text-line hidden sm:inline">
              •
            </span>

            <span className="text-sm text-muted">
              {project.year}
            </span>
          </div>
        </div>
      </div>

      {/* ================= RIGHT ================= */}

      <div
        className="
          flex
          shrink-0
          flex-col
          items-end
          justify-between
          gap-3
          sm:flex-row
          sm:items-center
        "
      >
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className={`
            px-3
            py-1.5
            md:px-4
            md:py-2
            rounded-full
            border
            text-[11px]
            uppercase
            tracking-[3px]
            whitespace-nowrap
            ${rank.color}
            ${rank.border}
            ${rank.bg}
          `}
        >
          {project.rank}
        </motion.div>

        <motion.div
          animate={{
            rotate: open ? 90 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            text-gold
            text-2xl
            md:text-3xl
            leading-none
          "
        >
          ›
        </motion.div>
      </div>
    </button>
  );
}