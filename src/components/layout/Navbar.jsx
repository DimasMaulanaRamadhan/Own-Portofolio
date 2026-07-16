import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "Lore" },
  { href: "#trials", label: "Trials" },
  { href: "#projects", label: "Bosses" },
  { href: "#skilltree", label: "Skill Tree" },
  { href: "#contact", label: "Summon" },
];

export default function Navbar({ visible }) {
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="max-w-[1250px] mx-auto px-6 py-4">

        {/* ================= TOP BAR ================= */}

        <div className="flex items-center justify-between">

          <a
            href="#title"
            className="font-display text-xs tracking-[3px] uppercase text-gold"
          >
            Dimas M. Ramadhan
          </a>

          {/* Desktop Navigation */}

          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-xs tracking-[2px] uppercase text-parchment/80 hover:text-goldBright transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gold text-2xl hover:text-goldBright transition"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
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
                    {link.label}
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