const educations = [
  {
    years: "2019 – 2022",
    title: "State senior high school 1 Sidayu",
    body: (
      <p>
        Located in Sidayu, Gresik, East Java, SMA Negeri 1 Sidayu is a reputable
        high school that emphasizes academic excellence and personal growth.
      </p>
    ),
  },
  {
    years: "2022 – 2026",
    title: "State University of Malang",
    role: "Title earned · bachelor of informatics engineering",
    body: (
      <p>
        As one of Indonesia's leading universities, Universitas Negeri Malang
        provides high-quality education and research opportunities. With a focus
        on innovation and real-world application, UM equips students with the
        skills and knowledge needed to excel in their fields while contributing
        positively to society.
      </p>
    ),
  },
];

const experiences = [
  {
    years: "Feb 2025 – Jun 2025",
    title: "Social Economic Accelerator Lab (SEAL)",
    role: "Trial survived · intern frontend web developer",
    body: (
      <>
        <p className="text-sm md:text-base leading-relaxed text-parchment/90 mb-4">
          Social Economic Accelerator Lab (SEAL) is a digital innovation hub
          focused on supporting digital transformation in Indonesia. During my
          internship as a Frontend Web Developer, I helped develop the Southeast
          Sulawesi Tourism and Creative Economy Office website by building
          responsive interfaces and integrating frontend features with backend
          services.
        </p>

        <h4 className="font-display text-xs tracking-[2px] text-gold uppercase mt-6 mb-2">
          Key contributions
        </h4>

        <ul className="list-disc pl-5 space-y-1.5 text-sm md:text-base leading-relaxed text-parchment/80">
          <li>
            Contributed to the development of a government web application for
            the Southeast Sulawesi Tourism and Creative Economy Office using
            React.js, building reusable and responsive UI components.
          </li>
          <li>
            Implemented frontend features such as landing pages, authentication
            flows, user profiles, and dynamic forms while integrating RESTful
            APIs with backend services.
          </li>
          <li>
            Collaborated in a cross-functional Agile team, working closely with
            UI/UX designers and backend developers to deliver production ready
            features.
          </li>
          <li>
            Diagnosed and resolved frontend issues related to API integration,
            state synchronization, form validation, and responsive layouts
            through debugging and testing.
          </li>
          <li>
            Strengthened frontend engineering skills through intensive AngularJS
            training and contributed to technical documentation to improve
            project maintainability.
          </li>
        </ul>
      </>
    ),
  },
];

export default function Trials() {
  const renderRow = (item, index, totalItems) => (
    <div
      key={item.title}
      className={`grid md:grid-cols-[200px_1fr] gap-2 md:gap-8 py-6 border-t border-line ${
        index === totalItems - 1 ? "border-b" : ""
      }`}
    >
      <div className="text-gold text-xs md:text-sm tracking-widest uppercase font-display">
        {item.years}
      </div>
      <div>
        <h3 className="font-display text-base md:text-lg text-goldBright font-semibold mb-1">
          {item.title}
        </h3>
        <p className="text-muted text-xs tracking-wider uppercase mb-3">
          {item.role}
        </p>
        <div className="text-parchment/90">{item.body}</div>
      </div>
    </div>
  );

  return (
    <section
      id="trials"
      className="max-w-[1100px] mx-auto px-6 md:px-0 py-24 space-y-16"
    >
      <div>
        <p className="font-display text-xs tracking-[4px] text-gold uppercase mb-2">
          Trials completed
        </p>
        <h2 className="font-display text-2xl md:text-3xl text-goldBright mb-8">
          Education
        </h2>
        <div className="flex flex-col">
          {educations.map((item, index) =>
            renderRow(item, index, educations.length),
          )}
        </div>
      </div>

      <div>
        <h2 className="font-display text-2xl md:text-3xl text-goldBright mb-8">
          Experience
        </h2>
        <div className="flex flex-col">
          {experiences.map((item, index) =>
            renderRow(item, index, experiences.length),
          )}
        </div>
      </div>
    </section>
  );
}
