import dimas2 from "../../assets/images/dimas2.png";

import useLang from "../../i18n/useLang";

export default function About() {
  const { t } = useLang();

  return (
    <section
      id="about"
      className="max-w-[1100px] mx-auto px-6 md:px-0 py-24 md:py-40"
    >
      {/* Heading */}
      <div className="mb-16">
        <p className="font-display text-xs tracking-[4px] text-gold uppercase mb-2">
          {t("about.eyebrow")}
        </p>

        <h2 className="font-display text-2xl md:text-3xl text-goldBright font-bold uppercase tracking-[2px]">
          {t("about.title")}
        </h2>

        <div className="mt-4 h-px w-20 bg-gradient-to-r from-gold via-gold/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-14 items-start">
        {/* Portrait */}
        <div className="relative w-[180px] h-[240px] md:w-[220px] md:h-[280px] border border-line bg-panel flex items-center justify-center mx-auto md:mx-0 shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
          <span className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold" />
          <span className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gold" />
          <span className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-gold" />
          <span className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold" />

          <span className="text-muted text-xs font-display tracking-widest uppercase">
            Portrait
          </span>

          <img
            src={dimas2}
            alt="Potret Dimas Maulana Ramadhan"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>

        {/* Lore */}
        <div className="max-w-3xl">
          <div className="border-l-2 border-ember pl-6 space-y-6 italic text-parchment/90 text-sm md:text-base leading-8">
            <p>{t("about.p1")}</p>

            <p>{t("about.p2")}</p>

            <p>{t("about.p3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}