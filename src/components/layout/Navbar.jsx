const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "Lore" },
  { href: "#trials", label: "Trials" },
  { href: "#projects", label: "Bosses" },
  { href: "#skilltree", label: "Skill tree" },
  { href: "#contact", label: "Summon" },
];

export default function Navbar({ visible }) {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-bg/20 backdrop-blur-sm border-b border-line/40 transition-opacity duration-700 ${
        visible
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      }`}
    >
      <div className="max-w-[1250px] mx-auto py-4 flex flex-wrap items-center justify-between gap-4">
        <a
          href="#title"
          className="font-display text-xs tracking-[3px] text-gold uppercase"
        >
          Dimas M. Ramadhan
        </a>
        <div className="flex gap-5 md:gap-8 flex-wrap">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-[11px] md:text-xs tracking-[2px] text-parchment/80 uppercase hover:text-goldBright transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
