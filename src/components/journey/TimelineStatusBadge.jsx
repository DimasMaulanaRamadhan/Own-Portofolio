import { motion } from "framer-motion";

const statusMap = {
  Completed: {
    label: "Completed",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    text: "text-emerald-300",
    dot: "bg-emerald-400",
  },

  Ongoing: {
    label: "Ongoing",
    border: "border-amber-500/30",
    bg: "bg-amber-500/10",
    text: "text-amber-300",
    dot: "bg-amber-400",
  },

  Internship: {
    label: "Internship",
    border: "border-sky-500/30",
    bg: "bg-sky-500/10",
    text: "text-sky-300",
    dot: "bg-sky-400",
  },

  Organization: {
    label: "Organization",
    border: "border-violet-500/30",
    bg: "bg-violet-500/10",
    text: "text-violet-300",
    dot: "bg-violet-400",
  },

  Certificate: {
    label: "Certificate",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    text: "text-cyan-300",
    dot: "bg-cyan-400",
  },

  Award: {
    label: "Award",
    border: "border-yellow-500/30",
    bg: "bg-yellow-500/10",
    text: "text-yellow-300",
    dot: "bg-yellow-400",
  },
};

export default function TimelineStatusBadge({ status }) {
  const style = statusMap[status] ?? {
    label: status,
    border: "border-line",
    bg: "bg-panel",
    text: "text-parchment",
    dot: "bg-parchment",
  };

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
        rounded-full
        border
        px-4
        py-2
        text-xs
        uppercase
        tracking-[3px]
        font-display
        ${style.border}
        ${style.bg}
        ${style.text}
      `}
    >
      <span
        className={`
          h-2
          w-2
          rounded-full
          ${style.dot}
        `}
      />

      {style.label}
    </motion.div>
  );
}
