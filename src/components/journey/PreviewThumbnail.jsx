import { motion } from "framer-motion";

export default function PreviewThumbnail({
  image,
  title = "Preview",
  subtitle = "Click to inspect",
  onPreview,
}) {
  if (!image) return null;

  return (
    <motion.button
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onPreview?.(image)}
      className="
        group
        w-full
        overflow-hidden
        rounded-xl
        border
        border-gold/20
        bg-[#171311]
        text-left
        transition-all
        duration-300
        hover:border-gold/60
        hover:shadow-[0_0_25px_rgba(231,187,96,.18)]
        cursor-pointer
      "
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            aspect-video
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Hover Overlay */}
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            bg-black/55
            opacity-0
            transition
            duration-300
            group-hover:opacity-100
          "
        >
          <span
            className="
              font-display
              text-xs
              tracking-[3px]
              uppercase
              text-goldBright
            "
          >
            Inspect
          </span>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="px-4 py-3 border-t border-gold/10">
        <p
          className="
            font-display
            text-xs
            tracking-[2px]
            uppercase
            text-goldBright
          "
        >
          {title}
        </p>

        <p className="mt-1 text-xs text-parchment/60">{subtitle}</p>
      </div>
    </motion.button>
  );
}
