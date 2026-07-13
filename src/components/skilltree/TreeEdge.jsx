import { motion } from "framer-motion";

export default function TreeEdge({ from, to, active = false }) {
  const colorMap = {
    root: "#C99A52",
    web: "#E0916B",
    game: "#6BC4A4",
    ai: "#7BB0D6",
    design: "#C296E8",
  };

  const color = colorMap[from.group] || "#777";

  return (
    <g>
      {/* Base Line */}

      <line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        stroke="#2A2622"
        strokeWidth="2"
      />

      {/* Active Line */}

      <motion.line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        stroke={color}
        strokeWidth={active ? 3 : 2}
        strokeLinecap="round"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        whileInView={{
          pathLength: 1,
          opacity: active ? 1 : 0.35,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
        }}
      />

      {/* Glow */}

      {active && (
        <motion.line
          x1={from.x}
          y1={from.y}
          x2={to.x}
          y2={to.y}
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          style={{
            filter: "blur(4px)",
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </g>
  );
}
