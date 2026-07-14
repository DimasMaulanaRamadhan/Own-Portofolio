import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ChapterCard from "../journey/ChapterCard";
import TimelineItem from "../journey/TimelineItem";
import AchievementCard from "../journey/AchievementCard";

import {
  academicJourney,
  professionalJourney,
  honorsAchievements,
} from "../journey/journeyData";

export default function JourneyLog() {
  // ===========================
  // Accordion State
  // ===========================

  const [openedChapter, setOpenedChapter] = useState(null);

  function toggleChapter(id) {
    setOpenedChapter((current) => (current === id ? null : id));
  }

  // ===========================
  // Image Preview State
  // ===========================

  const [previewImage, setPreviewImage] = useState(null);

  return (
    <>
      <section
        id="journey"
        className="relative mx-auto max-w-[1200px] px-6 py-32"
      >
        {/* ================= Background Ornament ================= */}

        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,#c7a96b_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>

        {/* ================= Heading ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-16"
        >
          <p className="font-display text-xs tracking-[4px] text-gold uppercase mb-2">
            Journey Log
          </p>

          <h2 className="font-display text-3xl md:text-4xl text-goldBright font-bold uppercase tracking-[2px]">
            Chronicles of Growth
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-parchment/75">
            Every completed quest has shaped my knowledge, experience, and
            professional growth. From academic foundations to real-world
            software development, each milestone represents another chapter of
            the journey.
          </p>

          <div className="mt-6 h-px w-24 bg-gradient-to-r from-gold via-gold/50 to-transparent" />
        </motion.div>

        {/* ================= Chapters ================= */}

        <div className="space-y-8">
          {/* ========================================================= */}
          {/* CHAPTER I */}
          {/* ========================================================= */}

          <ChapterCard
            chapter="Chapter I"
            title="Academic Journey"
            tagline="The First Steps"
            summary={`${academicJourney.length} Milestones`}
            open={openedChapter === 1}
            onToggle={() => toggleChapter(1)}
          >
            <div className="space-y-12">
              {academicJourney.map((item) => (
                <TimelineItem key={item.id} item={item} />
              ))}
            </div>
          </ChapterCard>

          {/* ========================================================= */}
          {/* CHAPTER II */}
          {/* ========================================================= */}

          <ChapterCard
            chapter="Chapter II"
            title="Professional Journey"
            tagline="Into the Real World"
            summary={`${professionalJourney.length} Experience`}
            open={openedChapter === 2}
            onToggle={() => toggleChapter(2)}
          >
            <div className="space-y-12">
              {professionalJourney.map((item) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  onPreview={setPreviewImage}
                />
              ))}
            </div>
          </ChapterCard>

          {/* ========================================================= */}
          {/* CHAPTER III */}
          {/* ========================================================= */}

          <ChapterCard
            chapter="Chapter III"
            title="Honors & Achievements"
            tagline="Marks of Achievement"
            summary={`${honorsAchievements.length} Achievement${
              honorsAchievements.length > 1 ? "s" : ""
            }`}
            open={openedChapter === 3}
            onToggle={() => toggleChapter(3)}
          >
            <div className="grid gap-6">
              {honorsAchievements.map((achievement) => (
                <AchievementCard
                  key={achievement.id}
                  achievement={achievement}
                  onPreview={setPreviewImage}
                />
              ))}
            </div>
          </ChapterCard>
        </div>
      </section>

      {/* ========================================================= */}
      {/* IMAGE PREVIEW MODAL */}
      {/* ========================================================= */}

      <AnimatePresence>
        {previewImage && (
          <motion.div
            className="
              fixed
              inset-0
              z-[999]
              flex
              items-center
              justify-center
              bg-black/85
              backdrop-blur-sm
              p-6
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
          >
            {/* Close Button */}

            <button
              onClick={() => setPreviewImage(null)}
              className="
                absolute
                top-6
                right-6
                h-11
                w-11
                rounded-full
                border
                border-gold/30
                bg-[#171311]
                text-goldBright
                text-xl
                transition
                hover:border-gold
                hover:rotate-90
              "
            >
              ✕
            </button>

            {/* Image */}

            <motion.img
              src={previewImage}
              alt="Preview"
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                max-h-[88vh]
                max-w-[90vw]
                rounded-xl
                border
                border-gold/30
                shadow-2xl
                object-contain
              "
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}