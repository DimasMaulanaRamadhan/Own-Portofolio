import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import projects from "../projects/data";
import ProjectCard from "../projects/ProjectCard";

export default function Projects() {
  const [openedProject, setOpenedProject] = useState(null);

  const [previewImage, setPreviewImage] = useState(null);

  function handleToggle(id) {
    setOpenedProject((currentId) => (currentId === id ? null : id));
  }

  return (
    <>
      <section
        id="projects"
        className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-24 md:py-32"
      >
        {/* Background Ornament */}

        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,#c7a96b_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-16"
        >
          <p className="font-display text-xs tracking-[4px] text-gold uppercase mb-2">
            Bosses Defeated
          </p>

          <h2 className="font-display text-3xl md:text-4xl text-goldBright font-bold uppercase tracking-[2px]">
            Chronicles of Conquest
          </h2>

          <div className="mt-4 h-px w-20 bg-gradient-to-r from-gold via-gold/50 to-transparent" />
        </motion.div>

        {/* Projects */}

        <div className="relative z-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              open={openedProject === project.id}
              onToggle={() => handleToggle(project.id)}
              onPreview={setPreviewImage}
            />
          ))}
        </div>
      </section>

      {/* ================= IMAGE PREVIEW ================= */}

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
              bg-black/90
              backdrop-blur-sm
              p-6
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
          >
            {/* Close */}

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
                cursor-pointer
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

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              className="
                absolute
                bottom-10
                left-1/2
                -translate-x-1/2
                text-xs
                uppercase
                tracking-[3px]
                text-gold/70
                pointer-events-none
              "
            >
              Press ESC or click outside to close
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}