export default function Marquee() {
  const items = [
    "AGENTS IA AUTONOMES",
    "MACHINE LEARNING PRÉDICTIF",
    "COMPUTER VISION",
    "LLM FINE-TUNING",
    "ARCHITECTURES DATA & PIPELINES",
    "AUTOMATISATION INTELLIGENTE",
  ];

  return (
    <section className="py-8 border-y border-white/[0.08] bg-white/[0.02] overflow-hidden backdrop-blur-md">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex shrink-0 items-center">
          {items.map((item, index) => (
            <span
              key={`a-${index}`}
              className="text-3xl md:text-4xl font-black text-transparent stroke-text-white px-8"
            >
              {item} •
            </span>
          ))}
        </div>
        <div className="flex shrink-0 items-center">
          {items.map((item, index) => (
            <span
              key={`b-${index}`}
              className="text-3xl md:text-4xl font-black text-transparent stroke-text-white px-8"
            >
              {item} •
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
