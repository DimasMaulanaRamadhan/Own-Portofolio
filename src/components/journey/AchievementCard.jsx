import { motion } from "framer-motion";

import PreviewThumbnail from "./PreviewThumbnail";

export default function AchievementCard({ achievement, onPreview }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -3 }}
      className="
        rounded-xl
        border
        border-gold/20
        bg-[#171311]
        overflow-hidden
        transition-all
        duration-300
        hover:border-gold/50
        hover:shadow-[0_0_30px_rgba(220,170,80,.12)]
      "
    >
      {/* Header */}
      <div className="border-b border-gold/10 px-6 py-5">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p
              className="
                text-[11px]
                uppercase
                tracking-[3px]
                text-gold
                mb-2
                font-display
              "
            >
              {achievement.type}
            </p>

            <h3
              className="
                font-display
                text-xl
                text-goldBright
                leading-snug
              "
            >
              {achievement.title}
            </h3>

            {achievement.issuer && (
              <p className="mt-2 text-sm text-parchment/70">
                Issued by{" "}
                <span className="text-parchment">{achievement.issuer}</span>
              </p>
            )}
          </div>

          {achievement.year && (
            <div
              className="
                rounded-lg
                border
                border-gold/20
                bg-black/20
                px-3
                py-2
                text-center
                shrink-0
              "
            >
              <p className="font-display text-xs tracking-[2px] text-gold uppercase">
                Year
              </p>

              <p className="mt-1 text-parchment font-semibold">
                {achievement.year}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="grid lg:grid-cols-[1fr_260px] gap-8 p-6">
        <div>
          {achievement.description && (
            <>
              <p className="font-display text-xs tracking-[3px] uppercase text-gold mb-3">
                Description
              </p>

              <p className="leading-8 text-parchment/90">
                {achievement.description}
              </p>
            </>
          )}
        </div>

        {achievement.image && (
          <PreviewThumbnail
            image={achievement.image}
            title={achievement.type}
            subtitle="Click to inspect"
            onPreview={onPreview}
          />
        )}
      </div>
    </motion.article>
  );
}
