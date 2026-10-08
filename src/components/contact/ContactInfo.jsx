import { motion } from "framer-motion";

import useLang from "../../i18n/useLang";

export default function ContactInfo({ info }) {
  const { t, pick } = useLang();

  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        relative
        overflow-hidden
        rounded-xl
        border
        border-line
        bg-panel
        p-8
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(220,170,80,.08),transparent_60%)]
          pointer-events-none
        "
      />

      <div className="relative">
        {/* Heading */}
        <p className="font-display text-xs uppercase tracking-[4px] text-gold mb-2">
          {t("contact.summoningInfo")}
        </p>

        <h3 className="font-display text-3xl text-goldBright mb-5">
          {t("contact.readyNextQuest")}
        </h3>

        {/* Intro */}
        <p className="leading-8 text-parchment/85 mb-10">{pick(info.introduction)}</p>

        {/* Contact Information */}
        <div className="space-y-7">
          {/* Email */}
          <div className="border-t border-line pt-5">
            <p className="text-[11px] uppercase tracking-[3px] text-gold mb-2">
              {t("contact.email")}
            </p>

            <a
              href={`mailto:${info.email}`}
              className="
                text-parchment
                transition-colors
                hover:text-goldBright
              "
            >
              {info.email}
            </a>
          </div>

          {/* Phone */}
          <div className="border-t border-line pt-5">
            <p className="text-[11px] uppercase tracking-[3px] text-gold mb-2">
              {t("contact.phone")}
            </p>

            <a
              href={`tel:${info.phone}`}
              className="
                text-parchment
                transition-colors
                hover:text-goldBright
              "
            >
              {info.phone}
            </a>
          </div>

          {/* Location */}
          <div className="border-t border-line pt-5">
            <p className="text-[11px] uppercase tracking-[3px] text-gold mb-2">
              {t("contact.location")}
            </p>

            <p className="text-parchment">{pick(info.location)}</p>
          </div>

          {/* Available For */}
          <div className="border-t border-line pt-5">
            <p className="text-[11px] uppercase tracking-[3px] text-gold mb-4">
              {t("contact.availableFor")}
            </p>

            <div className="flex flex-wrap gap-3">
              {pick(info.availableFor).map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 18,
                  }}
                  className="
                    rounded-full
                    border
                    border-gold/20
                    bg-[#171311]
                    px-4
                    py-2
                    text-sm
                    text-parchment
                    transition-all
                    duration-300
                    hover:border-gold/50
                    hover:shadow-[0_0_16px_rgba(220,170,80,.15)]
                  "
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
