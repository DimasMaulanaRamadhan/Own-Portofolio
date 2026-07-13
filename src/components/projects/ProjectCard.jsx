import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import StatusBadge from "./StatusBadge";
import TechBadge from "./TechBadge";
import ProjectTimeline from "./ProjectTimeline";
import ProjectHeader from "./ProjectHeader";

export default function ProjectCard({ project, index, open, onToggle }) {
  const images = project.images || [project.image];

  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setPreviewImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <motion.article
        layout
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.55,
        }}
        className="border-t border-line last:border-b"
      >
        <ProjectHeader
          project={project}
          index={index}
          open={open}
          onClick={onToggle}
        />

        <AnimatePresence>
          {open && (
            <motion.div
              layout
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.45,
              }}
              className="overflow-hidden"
            >
              <div className="grid lg:grid-cols-[360px_1fr] gap-10 pb-10 px-6">
                {/* LEFT GALLERY */}

                <div className="flex flex-col gap-5">
                  {/* IMAGE 1 */}

                  <motion.div
                    whileHover={{
                      scale: 1.03,
                    }}
                    onClick={() => setPreviewImage(images[0])}
                    className="
                      relative
                      cursor-pointer
                      group
                      overflow-hidden
                      rounded-xl
                      border
                      border-gold/20
                      bg-[#171311]
                      shadow-lg
                    "
                  >
                    <img
                      src={images[0]}
                      alt={`${project.name} Screenshot 1`}
                      className="
                        aspect-video
                        w-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    <div
                      className="
                        absolute
                        top-3
                        left-3
                        rounded-md
                        bg-black/70
                        px-2
                        py-1
                        text-[10px]
                        uppercase
                        tracking-[2px]
                        text-goldBright
                      "
                    >
                      Screenshot I
                    </div>

                    <div
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        bg-black/60
                        opacity-0
                        transition
                        duration-300
                        group-hover:opacity-100
                      "
                    >
                      <span className="font-display text-goldBright tracking-[4px] uppercase">
                        Inspect
                      </span>
                    </div>
                  </motion.div>

                  {/* IMAGE 2 */}

                  <motion.div
                    whileHover={{
                      scale: 1.03,
                    }}
                    onClick={() => setPreviewImage(images[1] || images[0])}
                    className="
                      relative
                      cursor-pointer
                      group
                      overflow-hidden
                      rounded-xl
                      border
                      border-gold/20
                      bg-[#171311]
                      shadow-lg
                    "
                  >
                    <img
                      src={images[1] || images[0]}
                      alt={`${project.name} Screenshot 2`}
                      className="
                        aspect-video
                        w-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    <div
                      className="
                        absolute
                        top-3
                        left-3
                        rounded-md
                        bg-black/70
                        px-2
                        py-1
                        text-[10px]
                        uppercase
                        tracking-[2px]
                        text-goldBright
                      "
                    >
                      Screenshot II
                    </div>

                    <div
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        bg-black/60
                        opacity-0
                        transition
                        duration-300
                        group-hover:opacity-100
                      "
                    >
                      <span className="font-display text-goldBright tracking-[4px] uppercase">
                        Inspect
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* CONTENT */}

                <div className="space-y-7">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Info title="Class" value={project.role} />

                    <Info title="Realm" value={project.platform} />

                    <Info
                      title="Quest Status"
                      value={<StatusBadge status={project.status} />}
                    />
                  </div>

                  <ProjectTimeline start={project.start} end={project.end} />

                  <div>
                    <p className="text-xs uppercase tracking-[3px] text-gold mb-3">
                      Equipment
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((item) => (
                        <TechBadge key={item} name={item} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[3px] text-gold mb-3">
                      Lore
                    </p>

                    <p className="text-parchment leading-8">{project.detail}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.article>

      {/* ================= FULLSCREEN IMAGE PREVIEW ================= */}

      <AnimatePresence>
        {previewImage && (
          <motion.div
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/85
              backdrop-blur-md
              p-6
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
          >
            {/* Close Button */}

            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setPreviewImage(null)}
              className="
                absolute
                top-20
                right-36
                z-20
                rounded-full
                border
                border-gold/30
                bg-[#181311]
                p-3
                text-goldBright
                transition
                hover:border-gold
                cursor-pointer
              "
            >
              <FaTimes />
            </motion.button>

            {/* Image */}

            <motion.img
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(e) => e.stopPropagation()}
              src={previewImage}
              alt="Project Preview"
              className="
                max-h-[75vh]
                max-w-[75vw]
                rounded-2xl
                border
                border-gold/20
                object-contain
                shadow-[0_0_60px_rgba(0,0,0,.65)]
                cursor-default
              "
            />

            {/* Hint */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              className="
                absolute
                bottom-14
                left-1/2
                -translate-x-1/2
                text-xs
                tracking-[3px]
                uppercase
                text-gold/70
                cursor-pointer
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

function Info({ title, value }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[3px] text-gold/60 mb-2">
        {title}
      </p>

      <div className="text-parchment">{value}</div>
    </div>
  );
}
