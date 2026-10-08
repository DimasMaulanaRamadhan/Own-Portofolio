import { motion } from "framer-motion";

import useLang from "../../i18n/useLang";
import PreviewThumbnail from "./PreviewThumbnail";
import TimelineStatusBadge from "./TimelineStatusBadge";
import TechBadge from "../projects/TechBadge";

export default function TimelineItem({ item, onPreview }) {
  const { t, pick } = useLang();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="
        relative
        border-l-2
        border-gold/30
        pl-8
        pb-10
        last:pb-0
      "
    >
      {/* Timeline Dot */}
      <div
        className="
          absolute
          -left-[9px]
          top-2
          h-4
          w-4
          rounded-full
          border-2
          border-gold
          bg-[#161210]
          shadow-[0_0_15px_rgba(220,170,80,.25)]
        "
      />

      {/* Year */}
      <p
        className="
          font-display
          text-xs
          uppercase
          tracking-[3px]
          text-gold
          mb-2
        "
      >
        {item.years}
      </p>

      {/* Title */}
      <h3
        className="
          font-display
          text-2xl
          text-goldBright
          mb-1
        "
      >
        {pick(item.title)}
      </h3>

      {/* Role */}
      {item.role && (
        <p
          className="
            text-sm
            uppercase
            tracking-[2px]
            text-parchment/60
            mb-5
          "
        >
          {pick(item.role)}
        </p>
      )}

      {/* Status */}
      {item.status && (
        <div className="mb-6">
          <TimelineStatusBadge status={item.status} />
        </div>
      )}

      {/* GPA */}
      {item.gpa && (
        <div className="mt-6">
          <p className="text-xs uppercase tracking-[3px] text-gold mb-2">
            {t("journey.academicRecord")}
          </p>

          <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            {t("journey.gpa")} {item.gpa}
          </div>
        </div>
      )}

      {/* Description */}
      {item.description && (
        <p
          className="
            text-parchment/90
            leading-8
            mb-6
          "
        >
          {pick(item.description)}
        </p>
      )}

      {/* Activities */}
      {item.activities?.length > 0 && (
        <div className="mt-8">
          <p className="text-xs uppercase tracking-[3px] text-gold mb-4">
            {t("journey.orgActivities")}
          </p>

          {item.activities.map((activity, activityIndex) => (
            <div
              key={activityIndex}
              className="rounded-xl border border-line bg-panel p-5 mb-4"
            >
              <h4 className="font-display text-goldBright">
                {pick(activity.title)}
              </h4>

              <p className="text-sm text-muted mt-1 whitespace-pre-line">
                {pick(activity.organization)}
              </p>

              <ul className="mt-4 space-y-2 list-disc pl-5 text-parchment/80">
                {pick(activity.points).map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Mission */}
      {item.mission && (
        <div className="mb-6">
          <p className="font-display text-xs uppercase tracking-[3px] text-gold mb-2">
            {t("journey.mission")}
          </p>

          <p className="text-parchment/90 leading-8">{pick(item.mission)}</p>
        </div>
      )}

      {/* Objectives */}
      {item.objectives?.length > 0 && (
        <div className="mb-6">
          <p className="font-display text-xs uppercase tracking-[3px] text-gold mb-3">
            {t("journey.objectives")}
          </p>

          <ul className="space-y-2">
            {pick(item.objectives).map((obj, index) => (
              <li
                key={index}
                className="
                  flex
                  gap-3
                  text-parchment/80
                  leading-7
                "
              >
                <span className="text-green-400">✓</span>

                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech */}
      {item.tech?.length > 0 && (
        <div className="mb-7">
          <p className="font-display text-xs uppercase tracking-[3px] text-gold mb-3">
            {t("journey.technology")}
          </p>

          <div className="flex flex-wrap gap-3">
            {item.tech.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>
      )}

      {/* Evidence */}
      {item.images?.length > 0 && (
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
          {item.images.map((image, index) => (
            <PreviewThumbnail
              key={index}
              image={image}
              title={t("journey.missionEvidence")}
              subtitle={t("journey.clickToInspect")}
              onPreview={onPreview}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
