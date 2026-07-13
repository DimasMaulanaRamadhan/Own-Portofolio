import { useState } from "react";
import { motion } from "framer-motion";

import projects from "../projects/data";
import ProjectCard from "../projects/ProjectCard";

export default function Projects() {
  const [openedProject, setOpenedProject] = useState(null);

  function handleToggle(id) {
    setOpenedProject((currentId) => (currentId === id ? null : id));
  }

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-[1200px] px-6 py-32"
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

      {/* Projects List Container */}
      <div className="relative z-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            open={openedProject === project.id}
            onToggle={() => handleToggle(project.id)}
          />
        ))}
      </div>
    </section>
  );
}
