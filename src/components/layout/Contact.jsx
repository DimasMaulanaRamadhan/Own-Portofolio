export default function Contact() {
  return (
    <>
      <section id="contact" className="text-center border-t border-line max-w-[1100px] mx-auto px-6 py-30">
        <p className="font-display text-xs tracking-[4px] text-gold uppercase mb-2">
          Leave your mark
        </p>
        <h2 className="font-display text-2xl md:text-3xl text-goldBright">
          Tinggalkan tanda summon
        </h2>

        <div className="mt-8 flex flex-col gap-2.5 items-center">
          <a
            href="mailto:dimasramadhan1866@gmail.com"
            className="text-gold hover:text-goldBright text-base"
          >
            dimasramadhan1866@gmail.com
          </a>
          <a
            href="tel:+6281231471866"
            className="text-gold hover:text-goldBright text-base"
          >
            +62 812 3147 1866
          </a>
          <a
            href="https://www.linkedin.com/in/dimasmaulanaramadhan"
            target="_blank"
            rel="noreferrer"
            className="text-gold hover:text-goldBright text-base"
          >
            linkedin.com/in/dimasmaulanaramadhan
          </a>
        </div>
      </section>

      <footer className="text-center py-10 text-muted text-xs tracking-[2px] border-t border-line">
        © 2026 — Dimas Maulana Ramadhan
      </footer>
    </>
  )
}
