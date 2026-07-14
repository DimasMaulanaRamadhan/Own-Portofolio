import { motion } from "framer-motion";

import ContactInfo from "../contact/ContactInfo";
import ArtifactCard from "../contact/ArtifactCard";

import { contactInfo, artifacts } from "../contact/contactData";

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="
          relative
          max-w-[1100px]
          mx-auto
          px-6
          md:px-0
          py-28
          border-t
          border-line
        "
      >
        {/* Background Ornament */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,#c7a96b_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="relative mb-14"
        >
          <p className="font-display text-xs tracking-[4px] text-gold uppercase mb-2">
            Final Checkpoint
          </p>

          <h2 className="font-display text-3xl md:text-4xl text-goldBright uppercase tracking-[2px]">
            Summon
          </h2>

          <div className="mt-4 h-px w-20 bg-gradient-to-r from-gold via-gold/50 to-transparent" />
        </motion.div>

        {/* Main Layout */}

        <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.9fr] gap-10">
          {/* Left */}

          <ContactInfo info={contactInfo} />

          {/* Right */}

          <div className="space-y-5">
            <motion.p
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                font-display
                text-xs
                uppercase
                tracking-[4px]
                text-gold
              "
            >
              Artifacts
            </motion.p>

            {artifacts.map((artifact) => (
              <ArtifactCard key={artifact.id} artifact={artifact} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer
        className="
          border-t
          border-line
          py-12
          px-6
        "
      >
        <div className="max-w-[1100px] mx-auto text-center">
          <p
            className="
              font-display
              uppercase
              tracking-[4px]
              text-gold
              text-xs
              mb-3
            "
          >
            Quest Complete
          </p>

          <p
            className="
              text-parchment/70
              leading-7
              max-w-xl
              mx-auto
            "
          >
            Thank you for exploring my journey. Every project, challenge, and
            achievement shared here represents another step toward becoming a
            better software developer.
          </p>

          <div
            className="
              mt-8
              flex
              justify-center
              flex-wrap
              gap-3
            "
          >
          </div>

          <div className="mt-10 h-px bg-line" />

          <p
            className="
              mt-8
              text-xs
              tracking-[2px]
              uppercase
              text-muted
            "
          >
            © 2026 • Dimas Maulana Ramadhan
          </p>
        </div>
      </footer>
    </>
  );
}
