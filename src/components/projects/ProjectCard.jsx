import { motion, AnimatePresence } from "framer-motion";

import StatusBadge from "./StatusBadge";
import TechBadge from "./TechBadge";
import ProjectTimeline from "./ProjectTimeline";
import ProjectHeader from "./ProjectHeader";

export default function ProjectCard({
  project,
  index,
  open,
  onToggle,
  onPreview,
}) {
  const images = project.images || [project.image];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 pb-10 px-4 sm:px-6">

              {/* LEFT GALLERY */}

              <div className="grid grid-cols-2 lg:flex lg:flex-col gap-4 sm:gap-5">

                {/* Screenshot 1 */}

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  onClick={() => onPreview(images[0])}
                  className="relative cursor-pointer group overflow-hidden rounded-xl border border-gold/20 bg-[#171311] shadow-lg"
                >
                  <img
                    src={images[0]}
                    alt={`${project.name} Screenshot 1`}
                    className="aspect-video w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 rounded-md bg-black/70 px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] uppercase tracking-[1px] sm:tracking-[2px] text-goldBright">
                    Screenshot I
                  </div>

                  <div className="absolute inset-0 hidden sm:flex items-center justify-center bg-black/60 opacity-0 transition duration-300 group-hover:opacity-100">
                    <span className="font-display text-xs uppercase tracking-[4px] text-goldBright">
                      Inspect
                    </span>
                  </div>
                </motion.div>

                {/* Screenshot 2 */}

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  onClick={() => onPreview(images[1] || images[0])}
                  className="relative cursor-pointer group overflow-hidden rounded-xl border border-gold/20 bg-[#171311] shadow-lg"
                >
                  <img
                    src={images[1] || images[0]}
                    alt={`${project.name} Screenshot 2`}
                    className="aspect-video w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 rounded-md bg-black/70 px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] uppercase tracking-[1px] sm:tracking-[2px] text-goldBright">
                    Screenshot II
                  </div>

                  <div className="absolute inset-0 hidden sm:flex items-center justify-center bg-black/60 opacity-0 transition duration-300 group-hover:opacity-100">
                    <span className="font-display text-xs uppercase tracking-[4px] text-goldBright">
                      Inspect
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* CONTENT */}

              <div className="space-y-6 sm:space-y-7 mt-2 lg:mt-0">

                <div className="grid grid-cols-2 gap-4 sm:gap-5">

                  <Info
                    title="Class"
                    value={project.role}
                  />

                  <Info
                    title="Realm"
                    value={project.platform}
                  />

                  <div className="col-span-2 sm:col-span-1">
                    <Info
                      title="Quest Status"
                      value={<StatusBadge status={project.status} />}
                    />
                  </div>

                </div>

                <ProjectTimeline
                  start={project.start}
                  end={project.end}
                />

                <div>
                  <p className="text-xs uppercase tracking-[3px] text-gold mb-3">
                    Equipment
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.tech.map((tech) => (
                      <TechBadge
                        key={tech}
                        name={tech}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[3px] text-gold mb-3">
                    Lore
                  </p>

                  <p className="text-parchment text-sm sm:text-base leading-7 sm:leading-8">
                    {project.detail}
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function Info({ title, value }) {
  return (
    <div>
      <p className="text-[10px] sm:text-[11px] uppercase tracking-[2px] sm:tracking-[3px] text-gold/60 mb-1 sm:mb-2">
        {title}
      </p>

      <div className="text-parchment text-sm sm:text-base break-words">
        {value}
      </div>
    </div>
  );
}