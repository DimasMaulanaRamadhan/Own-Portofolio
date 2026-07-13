import dimas2 from "../../assets/images/dimas2.png";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-[1100px] mx-auto px-6 md:px-0 py-32 md:py-52 grid md:grid-cols-[220px_1fr] gap-12 items-start">
      <div className="relative w-[220px] h-[280px] border border-line bg-panel flex items-center justify-center mx-auto md:mx-0 shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
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
          className="w-full h-full object-cover object-top absolute inset-0"
        />
      </div>

      <div className="space-y-4">
        <p className="font-display text-xs tracking-[4px] text-gold uppercase mb-2">
          Lore
        </p>
        <div className="border-l-2 border-ember pl-6 space-y-6 italic text-parchment/90 leading-relaxed text-sm md:text-base">
          <p>
            I am an Informatics Engineering fresh graduate from Universitas
            Negeri Malang with a strong interest in web development, UI/UX
            design, and AI-powered applications.
          </p>
          <p>
            Proficient in Python, JavaScript, and modern front-end technologies,
            I develop user-centered applications that combine functionality,
            usability, and clean design. I also leverage AI prompt engineering
            and generative AI tools to enhance development workflows and create
            innovative digital solutions.
          </p>
          <p>
            With strong problem-solving, communication, and teamwork skills, I
            am committed to continuous learning and eager to contribute to
            impactful projects that address real-world challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
