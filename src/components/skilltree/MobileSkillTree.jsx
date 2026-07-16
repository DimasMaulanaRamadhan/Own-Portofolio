import { motion, AnimatePresence } from "framer-motion";

export default function MobileSkillTree({ nodes = [], selected, setSelected, SkillDetail }) {
  const root = nodes.find((n) => n.id === "you");
  const webMain = nodes.find((n) => n.id === "web");
  const gameMain = nodes.find((n) => n.id === "game");
  const aiMain = nodes.find((n) => n.id === "ai");

  const webNodes = nodes.filter((n) => n.group === "web" && n.id !== "web");
  const gameNodes = nodes.filter((n) => n.group === "game" && n.id !== "game");
  const aiNodes = nodes.filter((n) => n.group === "ai" && n.id !== "ai");

  return (
    <div className="space-y-10">
      {/* ================= ROOT ================= */}
      {root && (
        <div className="flex flex-col items-center">
          <Node
            node={root}
            selected={selected?.id === root.id}
            onClick={() => setSelected(selected?.id === root.id ? null : root)}
            large
          />
          
          {/* Detail untuk Root Node */}
          <AnimatePresence>
            {selected?.id === root.id && SkillDetail && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="w-full overflow-hidden"
              >
                <SkillDetail skill={selected} />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="w-px h-10 bg-gold/40 mt-4" />
        </div>
      )}

      {/* ================= WEB ================= */}
      {webMain && (
        <Section title="Web Development">
          <div className="flex justify-center">
            <Node
              node={webMain}
              selected={selected?.id === webMain.id}
              onClick={() => setSelected(selected?.id === webMain.id ? null : webMain)}
            />
          </div>

          <div className="flex justify-center">
            <div className="w-px h-8 bg-gold/30" />
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {webNodes.map((node) => (
              <Node
                key={node.id}
                node={node}
                selected={selected?.id === node.id}
                onClick={() => setSelected(selected?.id === node.id ? null : node)}
              />
            ))}
          </div>

          {/* Muncul di bawah section jika yang dipilih adalah kategori web */}
          <AnimatePresence>
            {(selected?.group === "web" || selected?.id === "web") && SkillDetail && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mt-4"
              >
                <SkillDetail skill={selected} />
              </motion.div>
            )}
          </AnimatePresence>
        </Section>
      )}

      <div className="flex justify-center">
        <div className="w-px h-10 bg-gold/25" />
      </div>

      {/* ================= GAME ================= */}
      {gameMain && (
        <Section title="Game Development">
          <div className="flex justify-center">
            <Node
              node={gameMain}
              selected={selected?.id === gameMain.id}
              onClick={() => setSelected(selected?.id === gameMain.id ? null : gameMain)}
            />
          </div>

          <div className="flex justify-center">
            <div className="w-px h-8 bg-gold/30" />
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {gameNodes.map((node) => (
              <Node
                key={node.id}
                node={node}
                selected={selected?.id === node.id}
                onClick={() => setSelected(selected?.id === node.id ? null : node)}
              />
            ))}
          </div>

          {/* Muncul di bawah section jika yang dipilih adalah kategori game */}
          <AnimatePresence>
            {(selected?.group === "game" || selected?.id === "game") && SkillDetail && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mt-4"
              >
                <SkillDetail skill={selected} />
              </motion.div>
            )}
          </AnimatePresence>
        </Section>
      )}

      <div className="flex justify-center">
        <div className="w-px h-10 bg-gold/25" />
      </div>

      {/* ================= AI ================= */}
      {aiMain && (
        <Section title="Artificial Intelligence">
          <div className="flex justify-center">
            <Node
              node={aiMain}
              selected={selected?.id === aiMain.id}
              onClick={() => setSelected(selected?.id === aiMain.id ? null : aiMain)}
            />
          </div>

          <div className="flex justify-center">
            <div className="w-px h-8 bg-gold/30" />
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {aiNodes.map((node) => (
              <Node
                key={node.id}
                node={node}
                selected={selected?.id === node.id}
                onClick={() => setSelected(selected?.id === node.id ? null : node)}
              />
            ))}
          </div>

          {/* Muncul di bawah section jika yang dipilih adalah kategori AI */}
          <AnimatePresence>
            {(selected?.group === "ai" || selected?.id === "ai") && SkillDetail && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mt-4"
              >
                <SkillDetail skill={selected} />
              </motion.div>
            )}
          </AnimatePresence>
        </Section>
      )}
    </div>
  );
}

function Section({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="
        rounded-2xl
        border
        border-line
        bg-panel
        p-5
      "
    >
      <h3
        className="
          font-display
          text-lg
          text-goldBright
          text-center
          mb-6
        "
      >
        {title}
      </h3>
      {children}
    </motion.div>
  );
}

function Node({ node, selected, onClick, large = false }) {
  if (!node) return null;

  return (
    <motion.button
      whileTap={{ scale: 0.93 }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className="
        flex
        flex-col
        items-center
        gap-2
        cursor-pointer
        w-full
      "
    >
      <motion.div
        animate={{
          scale: selected ? 1.12 : 1,
          y: selected ? -4 : 0,
          boxShadow: selected
            ? "0 0 35px rgba(231,190,90,.65)"
            : "0 0 15px rgba(231,190,90,.15)",
        }}
        transition={{ duration: 0.25 }}
        className={`
          rounded-full
          border-2
          transition-all
          duration-300
          flex
          items-center
          justify-center
          shrink-0

          ${large ? "w-20 h-20" : "w-14 h-14"}
          ${selected ? "border-gold bg-gold/10" : "border-line bg-[#191412]"}
        `}
      >
        <span
          className={`
            font-display
            ${large ? "text-lg" : "text-xs"}
            text-goldBright
          `}
        >
          {node.label || ""}
        </span>
      </motion.div>

      <span
        className="
          text-[11px]
          text-center
          text-parchment/75
          line-clamp-2
          max-w-[80px]
        "
      >
        {node.title || ""}
      </span>
    </motion.button>
  );
}