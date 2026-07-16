import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import skillTreeData from "../skilltree/skillTreeData";
import MobileSkillTree from "../skilltree/MobileSkillTree";
import TreeNode from "../skilltree/TreeNode";
import TreeEdge from "../skilltree/TreeEdge";
import SkillDetail from "../skilltree/SkillDetail";

export default function SkillTree() {
  const { nodes, edges } = skillTreeData;

  const [selected, setSelected] = useState(null);

  const nodeMap = useMemo(() => {
    const map = {};
    nodes.forEach((node) => {
      map[node.id] = node;
    });
    return map;
  }, [nodes]);

  function isEdgeActive(fromId, toId) {
    if (!selected) return false;
    return selected.id === fromId || selected.id === toId;
  }

  return (
    <section
      id="skilltree"
      className="
        relative
        mx-auto
        max-w-[1400px]
        px-6
        py-32
      "
    >
      {/* ================= Background ================= */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="
            h-full
            w-full
            bg-[radial-gradient(circle_at_center,#c7a96b_1px,transparent_1px)]
            [background-size:30px_30px]
          "
        />
      </div>

      {/* ================= Heading ================= */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mb-16"
      >
        <p
          className="
            font-display
            text-xs
            uppercase
            tracking-[4px]
            text-gold
            mb-2
          "
        >
          Skill Tree
        </p>

        <h2
          className="
            font-display
            text-3xl
            md:text-4xl
            uppercase
            tracking-[2px]
            text-goldBright
          "
        >
          Path of Mastery
        </h2>

        <div
          className="
            mt-4
            mb-[-30px]
            h-px
            w-24
            bg-gradient-to-r
            from-gold
            to-transparent
          "
        />
      </motion.div>

      {/* ================================================= */}
      {/* DESKTOP LAYOUT */}
      {/* ================================================= */}
      <div
        className="
          hidden
          lg:grid
          relative
          z-10
          xl:grid-cols-[1.6fr_0.9fr]
          gap-8
          items-start
        "
      >
        {/* LEFT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            rounded-2xl
            border
            border-line
            bg-panel
            p-4
            min-h-[770px]
            flex
            items-center
            justify-center
            overflow-auto
          "
        >
          <svg
            viewBox="0 0 720 620"
            className="min-w-[720px] w-full h-full"
          >
            {/* EDGES */}
            {edges.map(([fromId, toId]) => {
              const from = nodeMap[fromId];
              const to = nodeMap[toId];

              return (
                <TreeEdge
                  key={`${fromId}-${toId}`}
                  from={from}
                  to={to}
                  active={isEdgeActive(fromId, toId)}
                />
              );
            })}

            {/* NODES */}
            {nodes.map((node) => (
              <TreeNode
                key={node.id}
                node={node}
                selected={selected?.id === node.id}
                onSelect={(clickedNode) => {
                  if (selected?.id === clickedNode.id) {
                    setSelected(null);
                    return;
                  }
                  setSelected(clickedNode);
                }}
              />
            ))}
          </svg>
        </motion.div>

        {/* RIGHT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
        >
          <SkillDetail skill={selected} />
        </motion.div>
      </div>

      {/* ================================================= */}
      {/* MOBILE LAYOUT */}
      {/* ================================================= */}
      <div className="lg:hidden relative z-10">
        {/* Detail duplikat di bawah sudah dihapus, sekarang murni diatur oleh MobileSkillTree */}
        <MobileSkillTree 
          nodes={nodes} 
          selected={selected} 
          setSelected={setSelected} 
          SkillDetail={SkillDetail}
        />
      </div>

      {/* ================= Legend ================= */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45 }}
        className="
          mt-8
          mb-[-95px]
          flex
          flex-wrap
          items-center
          justify-center
          gap-6
          border-t
          border-line
          pt-8
        "
      >
        <Legend color="#E0916B" label="Web Development" />
        <Legend color="#6BC4A4" label="Game Development" />
        <Legend color="#7BB0D6" label="Artificial Intelligence" />
        <Legend color="#C99A52" label="Core Skill" />
      </motion.div>
    </section>
  );
}

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="h-3 w-3 rounded-full border"
        style={{
          backgroundColor: color,
          borderColor: color,
          boxShadow: `0 0 12px ${color}`,
        }}
      />
      <span
        className="
          text-sm
          text-parchment/80
          tracking-wide
        "
      >
        {label}
      </span>
    </div>
  );
}