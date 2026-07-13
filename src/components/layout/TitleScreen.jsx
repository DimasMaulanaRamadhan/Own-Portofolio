export default function TitleScreen({ onStart }) {
  return (
    <div
      id="title"
      onClick={onStart}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onStart()}
      className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6 bg-bg cursor-pointer relative overflow-hidden select-none"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(138,52,22,0.14),transparent_65%)] pointer-events-none" />

      <p className="font-display text-xs md:text-sm tracking-[6px] text-muted uppercase mb-6 relative">
        A portfolio
      </p>
      <h1 className="font-display text-3xl md:text-6xl text-goldBright tracking-[4px] md:tracking-[6px] uppercase relative leading-snug">
        Dimas Maulana
        <br />
        Ramadhan
      </h1>

      <p className="mt-12 text-muted text-sm md:text-base tracking-[3px] uppercase animate-fade-blink relative">
        Click anywhere to start
      </p>
    </div>
  );
}
