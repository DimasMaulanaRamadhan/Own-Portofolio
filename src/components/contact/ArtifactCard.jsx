import { motion } from "framer-motion";

export default function ArtifactCard({ artifact }) {
  const handleClick = () => {
    if (artifact.external) {
      window.open(artifact.url, "_blank", "noopener,noreferrer");
      return;
    }

    window.open(artifact.url, "_blank");
  };

  return (
    <motion.button
      whileHover={{
        y: -4,
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.985,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      onClick={handleClick}
      className="
        group
        relative
        overflow-hidden
        w-full
        rounded-xl
        border
        border-line
        bg-panel
        p-6
        text-left
        transition-all
        duration-300
        cursor-pointer
        hover:border-gold/50
        hover:shadow-[0_0_25px_rgba(220,170,80,.12)]
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          bg-[radial-gradient(circle_at_top_right,rgba(220,170,80,.12),transparent_65%)]
        "
      />

      {/* Animated Shine */}
      <div
        className="
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/5
          to-transparent
          transition-transform
          duration-700
          group-hover:translate-x-full
        "
      />

      <div className="relative flex h-full flex-col">
        {/* Subtitle */}
        <p
          className="
            text-[11px]
            uppercase
            tracking-[3px]
            text-gold
            mb-2
          "
        >
          {artifact.subtitle}
        </p>

        {/* Title */}
        <h3
          className="
            font-display
            text-2xl
            text-goldBright
            mb-4
          "
        >
          {artifact.title}
        </h3>

        {/* Description */}
        <p
          className="
            flex-1
            leading-7
            text-sm
            text-parchment/80
          "
        >
          {artifact.description}
        </p>

        {/* Bottom */}
        <div
          className="
            mt-8
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-sm
              uppercase
              tracking-[2px]
              text-goldBright
              transition-all
              duration-300
              group-hover:tracking-[3px]
            "
          >
            {artifact.button}
          </span>

          <motion.span
            animate={{
              x: [0, 4, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              text-xl
              text-gold
            "
          >
            ↗
          </motion.span>
        </div>
      </div>
    </motion.button>
  );
}
