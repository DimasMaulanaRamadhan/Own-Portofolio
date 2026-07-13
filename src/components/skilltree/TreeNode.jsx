import { motion } from "framer-motion";

export default function TreeNode({ node, selected, onSelect }) {
  const colors = {
    web: {
      fill: "#4A1B0C",
      stroke: "#E0916B",
      glow: "rgba(224,145,107,.65)",
      text: "#F5D9C9",
    },

    game: {
      fill: "#173024",
      stroke: "#6BC4A4",
      glow: "rgba(107,196,164,.65)",
      text: "#DFF8EE",
    },

    ai: {
      fill: "#12283D",
      stroke: "#7BB0D6",
      glow: "rgba(123,176,214,.65)",
      text: "#E3F2FC",
    },

    design: {
      fill: "#352248",
      stroke: "#C296E8",
      glow: "rgba(194,150,232,.65)",
      text: "#F1E7FC",
    },

    root: {
      fill: "#412402",
      stroke: "#C99A52",
      glow: "rgba(201,154,82,.75)",
      text: "#F5D7A2",
    },
  };

  const style = colors[node.group] || colors.web;

  return (
    <motion.g
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: node.delay || 0,
        duration: 0.35,
      }}
      whileHover={{
        scale: 1.08,
      }}
      onClick={() => node.title && onSelect(node)}
      className={node.title ? "cursor-pointer" : ""}
    >
      {/* Glow */}

      {selected && (
        <motion.circle
          cx={node.x}
          cy={node.y}
          r={node.r + 7}
          fill={style.glow}
          initial={{
            opacity: 0.25,
            scale: 0.8,
          }}
          animate={{
            opacity: 0.45,
            scale: 1.1,
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.6,
          }}
        />
      )}

      {/* Node */}

      <motion.circle
        cx={node.x}
        cy={node.y}
        r={node.r}
        fill={style.fill}
        stroke={style.stroke}
        strokeWidth={selected ? 3 : 1.6}
        animate={{
          filter: selected
            ? `drop-shadow(0px 0px 12px ${style.glow})`
            : "drop-shadow(0px 0px 0px transparent)",
        }}
        transition={{
          duration: 0.25,
        }}
      />

      {/* Inner Dot */}

      {selected && (
        <motion.circle
          cx={node.x}
          cy={node.y}
          r={4}
          fill={style.stroke}
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
        />
      )}

      {/* Label */}

      <text
        x={node.x}
        y={node.y + 5}
        textAnchor="middle"
        fill={style.text}
        fontSize={node.fontSize}
        className="
          pointer-events-none
          select-none
          font-medium
        "
      >
        {node.label}
      </text>
    </motion.g>
  );
}
