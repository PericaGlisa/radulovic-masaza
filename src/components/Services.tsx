import { motion } from "framer-motion";
import { Hand, Leaf, Activity, Brain, Flower2, Sparkles, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Hand,
    title: "Manuelna Terapija",
    desc: "Stručna terapija usmerena na otklanjanje napetosti, blokada i bolova u mišićima i zglobovima.",
  },
  {
    icon: Leaf,
    title: "Relax Masaža",
    desc: "Duboko opuštajuća masaža celog tela koja vraća harmoniju, smiruje um i obnavlja energiju.",
  },
  {
    icon: Activity,
    title: "Sportska Masaža",
    desc: "Intenzivan tretman za sportiste — ubrzava oporavak, povećava performans i sprečava povrede.",
  },
  {
    icon: Brain,
    title: "Antistres Tretman",
    desc: "Holistički pristup koji oslobađa od nakupljenog stresa, vraćajući mentalnu i fizičku jasnoću.",
  },
  {
    icon: Flower2,
    title: "Aromaterapija",
    desc: "Tretman sa eteričnim uljima koji budi čula i otvara prostor za potpuno opuštanje.",
  },
  {
    icon: Sparkles,
    title: "Wellness Rituali",
    desc: "Ekskluzivni autorski rituali koji kombinuju masažu, kamenje i aromu — premium iskustvo.",
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
