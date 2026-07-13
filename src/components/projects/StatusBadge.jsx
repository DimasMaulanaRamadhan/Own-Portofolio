import { motion } from "framer-motion";

const statusConfig = {
  Completed: {
    color: "text-emerald-300",
    border: "border-emerald-700/40",
    bg: "bg-emerald-900/20",
    glow: "shadow-[0_0_15px_rgba(16,185,129,0.15)]",
    label: "Quest Completed",
  },

  "In Progress": {
    color: "text-amber-300",
    border: "border-amber-700/40",
    bg: "bg-amber-900/20",
    glow: "shadow-[0_0_15px_rgba(245,158,11,0.15)]",
    label: "Quest Active",
  },

  Archived: {
    color: "text-slate-300",
    border: "border-slate-700/40",
    bg: "bg-slate-900/20",
    glow: "shadow-[0_0_15px_rgba(148,163,184,0.10)]",
    label: "Ancient Record",
  },

  Cancelled: {
    color: "text-red-300",
    border: "border-red-700/40",
    bg: "bg-red-900/20",
    glow: "shadow-[0_0_15px_rgba(239,68,68,0.15)]",
    label: "Quest Failed",
  },
};

export default function StatusBadge({ status }) {
  const config = statusConfig[status] || statusConfig["Archived"];

  return (
    <motion.div
      whileHover={{
        scale: 1.04,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        inline-flex
        items-center
        gap-2
        px-3
        py-1.5
        rounded-full
        border
        backdrop-blur-sm
        ${config.color}
        ${config.border}
        ${config.bg}
        ${config.glow}
      `}
    >
      <motion.span
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="h-2 w-2 rounded-full bg-current"
      />

      <span
        className="
          text-xs
          tracking-[2px]
          uppercase
          font-medium
        "
      >
        {config.label}
      </span>
    </motion.div>
  );
}
