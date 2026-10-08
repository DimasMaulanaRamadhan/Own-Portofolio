import { motion, AnimatePresence } from "framer-motion";

import useLang from "../../i18n/useLang";

export default function SkillDetail({ skill }) {
  const { t, pick } = useLang();

  return (
    <motion.aside
      layout
      className="
        sticky
        top-28
        rounded-2xl
        border
        border-gold/20
        bg-[#15110f]
        p-7
        shadow-xl
        min-h-[620px]
      "
    >
      <AnimatePresence mode="wait">
        {!skill ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              flex
              h-full
              min-h-[560px]
              flex-col
              items-center
              justify-center
              text-center
            "
          >
            <div
              className="
                mb-5
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                border
                border-gold/20
                bg-[#1c1714]
                text-3xl
              "
            >
              ✦
            </div>

            <h3
              className="
                font-display
                text-xl
                text-goldBright
                uppercase
                tracking-[3px]
              "
            >
              {t("skilltree.codex")}
            </h3>

            <p className="mt-4 max-w-xs leading-7 text-parchment/70">
              {t("skilltree.noneSelected")}
            </p>

            <p className="mt-4 max-w-xs leading-7 text-parchment/70">
              {t("skilltree.selectNode")}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.25 }}
          >
            {/* Category */}

            <p
              className="
                text-xs
                uppercase
                tracking-[4px]
                text-gold
              "
            >
              {pick(skill.category)}
            </p>

            {/* Title */}

            <h3
              className="
                mt-2
                font-display
                text-3xl
                text-goldBright
              "
            >
              {pick(skill.title)}
            </h3>

            {/* Status */}

            <div className="mt-5">
              <span
                className="
                  rounded-full
                  border
                  border-green-500/30
                  bg-green-500/10
                  px-4
                  py-1.5
                  text-xs
                  uppercase
                  tracking-[2px]
                  text-green-400
                "
              >
                {t("skilltree.unlocked")}
              </span>
            </div>

            {/* Divider */}

            <div className="my-7 h-px bg-line" />

            {/* Description */}

            <section>
              <p
                className="
                  mb-3
                  text-xs
                  uppercase
                  tracking-[3px]
                  text-gold
                "
              >
                {t("skilltree.description")}
              </p>

              <p
                className="
                  leading-8
                  text-parchment
                "
              >
                {pick(skill.description)}
              </p>
            </section>

            {/* Used In */}

            <section className="mt-8">
              <p
                className="
                  mb-3
                  text-xs
                  uppercase
                  tracking-[3px]
                  text-gold
                "
              >
                {t("skilltree.usedIn")}
              </p>

              <div className="space-y-3">
                {pick(skill.usedIn).map((item, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-lg
                      border
                      border-line
                      bg-[#1a1512]
                      px-4
                      py-3
                    "
                  >
                    <span className="text-green-400">✓</span>

                    <span className="text-parchment">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Related */}

            <section className="mt-8">
              <p
                className="
                  mb-3
                  text-xs
                  uppercase
                  tracking-[3px]
                  text-gold
                "
              >
                {t("skilltree.related")}
              </p>

              <div className="flex flex-wrap gap-3">
                {pick(skill.related).map((item, index) => (
                  <span
                    key={index}
                    className="
                      rounded-lg
                      border
                      border-gold/20
                      bg-[#1a1512]
                      px-3
                      py-2
                      text-sm
                      text-parchment
                      transition
                      duration-300
                      hover:border-gold/60
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.aside>
  );
}
