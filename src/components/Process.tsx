import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Dolazak", d: "Dolazak na Vašu adresu i kratak razgovor — slušamo Vaše telo, Vaše ciljeve i potrebe." },
  { n: "02", t: "Ritual Pripreme", d: "Priprema prostora, ulja i muzike — Vaš dom postaje oaza mira dok se čula otvaraju." },
  { n: "03", t: "Tretman", d: "Stručna manuelna terapija prilagođena vama — svaki pokret ima nameru." },
  { n: "04", t: "Tišina", d: "Trenutak posle tretmana, sa čajem i tišinom, da telo zapamti novo stanje." },
  { n: "05", t: "Preporuke", d: "Personalizovane preporuke za nastavak — vežbe, ritmovi i mali rituali kod kuće." },
];

export function Process() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gold">— Ritual —</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-champagne mt-4 mb-6">
            Pet koraka do <span className="text-gradient-gold font-serif italic">unutrašnje tišine</span>
          </h2>
          <div className="gold-divider w-32 mx-auto" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent md:-translate-x-1/2" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={`relative mb-14 md:mb-20 grid md:grid-cols-2 gap-8 items-center ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div className={`pl-20 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                <div className="font-display text-6xl md:text-7xl text-gradient-gold leading-none mb-3">{s.n}</div>
                <h3 className="font-display text-2xl md:text-3xl text-champagne mb-3 tracking-wide">{s.t}</h3>
                <p className="font-serif text-lg text-champagne/70 leading-relaxed">{s.d}</p>
              </div>
              <div className="hidden md:block" />
              <div className="absolute left-8 md:left-1/2 top-4 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-gold shadow-glow ring-4 ring-forest" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
