import { motion } from "framer-motion";

export default function ProjectTimeline({ start, end }) {
  return (
    <div>
      {/* Title */}

      <p
        className="
          mb-4
          text-xs
          uppercase
          tracking-[3px]
          text-gold
        "
      >
        Quest Timeline
      </p>

      {/* Timeline */}

      <div className="relative">
        {/* Line */}

        <div
          className="
            absolute
            top-4
            left-0
            right-0
            h-px
            bg-gradient-to-r
            from-gold/20
            via-gold/60
            to-gold/20
          "
        />

        <div className="relative flex justify-between">
          {/* Start */}

          <TimelineNode title="Quest Started" value={start} />

          {/* End */}

          <TimelineNode title="Quest Cleared" value={end} />
        </div>
      </div>
    </div>
  );
}

function TimelineNode({ title, value }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className="flex flex-col items-center"
    >
      {/* Node */}

      <motion.div
        animate={{
          boxShadow: [
            "0 0 0px rgba(255,208,120,.2)",
            "0 0 10px rgba(255,208,120,.6)",
            "0 0 0px rgba(255,208,120,.2)",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
        }}
        className="
          z-10
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          border
          border-gold/60
          bg-[#181512]
        "
      >
        <div className="h-2.5 w-2.5 rounded-full bg-gold" />
      </motion.div>

      {/* Text */}

      <p
        className="
          mt-4
          text-[11px]
          uppercase
          tracking-[2px]
          text-gold/70
        "
      >
        {title}
      </p>

      <p
        className="
          mt-1
          font-display
          text-lg
          text-goldBright
        "
      >
        {value}
      </p>
    </motion.div>
  );
}
