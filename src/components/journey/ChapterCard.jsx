import { motion, AnimatePresence } from "framer-motion";

export default function ChapterCard({
  chapter,
  title,
  tagline,
  open,
  onToggle,
  children,
}) {
  return (
    <motion.article
      layout
      className="
        overflow-hidden
        rounded-2xl
        border
        border-gold/20
        bg-panel
        transition-all
        duration-300
      "
    >
      {/* ================= HEADER ================= */}

      <button
        onClick={onToggle}
        className="
          group
          w-full
          cursor-pointer
          px-8
          py-7
          text-left
          transition
          duration-300
          hover:bg-white/[0.02]
        "
      >
        <div className="flex items-center justify-between gap-8">
          {/* Left */}

          <div>
            <p
              className="
                font-display
                text-[11px]
                uppercase
                tracking-[4px]
                text-gold
                mb-2
              "
            >
              {chapter}
            </p>

            <h2
              className="
                font-display
                text-2xl
                md:text-3xl
                text-goldBright
                mb-2
              "
            >
              {title}
            </h2>

            <p
              className="
                text-sm
                italic
                text-parchment/60
                max-w-2xl
              "
            >
              {tagline}
            </p>
          </div>

          {/* Right */}

          <motion.div
            animate={{
              rotate: open ? 180 : 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-gold/20
              text-goldBright
              text-xl
              shrink-0
              group-hover:border-gold/50
            "
          >
            ▼
          </motion.div>
        </div>
      </button>

      {/* ================= CONTENT ================= */}

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            layout
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="overflow-hidden"
          >
            <div
              className="
                border-t
                border-gold/10
                px-8
                py-8
              "
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
