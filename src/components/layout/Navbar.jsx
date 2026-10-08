import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

import useLang from "../../i18n/useLang";

const links = [
  { href: "#hero", key: "nav.home" },
  { href: "#about", key: "nav.lore" },
  { href: "#journey", key: "nav.journey" },
  { href: "#projects", key: "nav.bosses" },
  { href: "#skilltree", key: "nav.skilltree" },
  { href: "#contact", key: "nav.summon" },
];

function LanguageToggle({ className = "" }) {
  const { lang, setLang, t } = useLang();

  const base =
    "font-display text-[11px] tracking-[2px] uppercase transition-colors px-3 py-1 cursor-pointer select-none";
  const active = "bg-gold text-bg";
  const inactive = "text-parchment/60 hover:text-parchment";

  return (
    <div
      role="group"
      aria-label={t("nav.toggleAria")}
      title={t("nav.toggleAria")}
      className={`flex items-center rounded-full border border-line/60 overflow-hidden ${className}`}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`${base} ${lang === "en" ? active : inactive}`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLang("id")}
        aria-pressed={lang === "id"}
        className={`${base} ${lang === "id" ? active : inactive}`}
      >
        ID
      </button>
    </div>
  );
}

export default function Navbar({ visible }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLang();

  function handleClick() {
    setMenuOpen(false);
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 border-b border-line/40 bg-bg/70 backdrop-blur-md transition-opacity duration-700 ${
        visible
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      }`}
    >
      <div className="max-w-[1425px] mx-auto px-2 mr-5 py-4">

        {/* ================= TOP BAR ================= */}

        <div className="flex items-center justify-between">

          <a
            href="#title"
            className="font-display text-xs tracking-[3px] uppercase text-gold"
          >
            Dimas M. Ramadhan
          </a>

          {/* Desktop Navigation + Language Toggle */}

          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-display text-xs tracking-[2px] uppercase text-parchment/80 hover:text-goldBright transition-colors"
                >
                  {t(link.key)}
                </a>
              ))}
            </div>

            {/* Divider */}

            <span className="h-5 w-px bg-goldBright/70" />

            <LanguageToggle />
          </div>

          {/* Mobile: Language Toggle + Menu Button */}

          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gold text-2xl hover:text-goldBright transition"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}

        <AnimatePresence>

          {menuOpen && (

            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="
                md:hidden
                mt-5
                border-t
                border-line
                pt-5
              "
            >

              <div className="flex flex-col">

                {links.map((link) => (

                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleClick}
                    className="
                      py-3
                      border-b
                      border-line/40
                      font-display
                      text-xs
                      uppercase
                      tracking-[3px]
                      text-parchment/80
                      hover:text-goldBright
                      transition-colors
                    "
                  >
                    {t(link.key)}
                  </a>

                ))}

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>
    </nav>
  );
}