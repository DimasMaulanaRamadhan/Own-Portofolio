import { useState, useEffect, useRef } from "react";
import dimas from "../../assets/images/dimas.png";
import dimas2 from "../../assets/images/dimas2.png";

export default function Hero() {
  const [isFlipped, setIsFlipped] = useState(false);

  const isFlippedRef = useRef(false);

  useEffect(() => {
    let timeoutId;

    const runAnimation = () => {
      // 1. Balikkan nilai statusnya dulu
      isFlippedRef.current = !isFlippedRef.current;

      // 2. Update state React untuk memicu animasi visual koin berputar
      setIsFlipped(isFlippedRef.current);

      // 3. Tentukan durasi delay berikutnya di LUAR fungsi setter state
      const nextDuration = isFlippedRef.current
        ? 500 // Durasi foto kedua (cepat)
        : 4000; // Durasi foto pertama (lama)

      // 4. Jadwalkan eksekusi animasi selanjutnya secara aman
      timeoutId = setTimeout(runAnimation, nextDuration);
    };

    // Mulai animasi pertama kali setelah 4 detik awal
    timeoutId = setTimeout(runAnimation, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] flex flex-col items-center justify-center text-center mt-12 px-6 border-b border-line"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_30%,rgba(138,52,22,0.14),transparent_60%)] pointer-events-none" />

      <div className="relative w-[150px] h-[150px] rounded-full border-2 border-gold shadow-[0_0_0_6px_#0b0a09,0_0_0_7px_#332e28] mb-8 bg-panel [perspective:1000px]">
        <div
          className={`w-full h-full rounded-full relative [transform-style:preserve-3d] transition-transform duration-700 ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden flex items-center justify-center [backface-visibility:hidden]">
            <img
              src={dimas} // Ganti dengan path foto 1 kamu
              alt="Potret Dimas Depan"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <img
              src={dimas2} // Ganti dengan path foto 2 kamu
              alt="Potret Dimas Belakang"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      <p className="font-display text-xs tracking-[4px] text-gold uppercase mb-2">
        Character sheet
      </p>
      <h1 className="font-display text-4xl md:text-5xl font-semibold text-goldBright tracking-wide">
        Dimas Maulana Ramadhan
      </h1>
      <p className="text-sm md:text-base tracking-[3px] text-muted uppercase mt-4">
        Frontend Developer · Informatics Engineer
      </p>

      <a
        href="#about"
        className="mt-12 border border-gold text-gold font-display text-xs tracking-[2px] uppercase px-8 py-3 hover:bg-emberDark hover:text-goldBright transition-colors"
      >
        Continue ↓
      </a>
    </section>
  );
}
