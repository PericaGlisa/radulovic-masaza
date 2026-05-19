import { motion } from "framer-motion";
import { Hand, Leaf, Activity, Brain, Flower2, Sparkles, ArrowUpRight, Home, Moon } from "lucide-react";

const services = [
  {
    title: "Classic Zen",
    desc: "Savršen spoj relaksacije i terapeutske masaže. Idealno za oslobađanje od svakodnevnog stresa i napetosti mišića.",
    icon: Leaf,
  },
  {
    title: "Golden Aura",
    desc: "Naš potpisni ritual koji obnavlja energiju i pruža dubinski mir. Uključuje tretman celog tela uz premium ulja.",
    icon: Sparkles,
  },
  {
    title: "Power Recovery",
    desc: "Intenzivna sportska masaža fokusirana na duboka tkiva i oporavak mišića nakon fizičkog napora.",
    icon: Activity,
  },
];

export function Services() {
  return (
    <section id="tretmani" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gold">— Tretmani —</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-champagne mt-4 mb-6">
            Premium tretmani <span className="text-gradient-gold font-serif italic">krojeni za vas</span>
          </h2>
          <div className="gold-divider w-32 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: (i % 3) * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glass rounded-3xl p-8 hover-lift overflow-hidden"
            >
              <div className="absolute inset-x-0 -top-px h-px animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl glass-gold mb-6">
                <s.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-display text-2xl text-champagne mb-3 tracking-wide">{s.title}</h3>
              <p className="font-serif text-base text-champagne/70 leading-relaxed mb-6">{s.desc}</p>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-gold hover:gap-3 transition-all"
              >
                Rezerviši <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
