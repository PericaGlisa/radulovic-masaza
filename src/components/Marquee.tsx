const items = [
  "Manuelna Terapija",
  "Sportska Masaža",
  "Aromaterapija",
  "Wellness Rituali",
  "Antistres Tretman",
  "Premium Iskustvo",
  "Diskrecija",
  "Holistički Pristup",
];

export function Marquee() {
  const loop = [...items, ...items, ...items];
  return (
    <div className="relative py-8 border-y border-gold/15 bg-forest/40 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-forest to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-forest to-transparent z-10" />
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {loop.map((t, i) => (
          <span
            key={i}
            className="font-display text-xl md:text-2xl tracking-[0.35em] uppercase text-champagne/40 flex items-center gap-16"
          >
            {t}
            <span className="h-1 w-1 rounded-full bg-gold shadow-glow" />
          </span>
        ))}
      </div>
    </div>
  );
}
