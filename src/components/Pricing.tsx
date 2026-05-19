import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";

const plans = [
  {
    name: "Classic Zen",
    price: "4.500",
    duration: "60 minuta",
    desc: "Savršen balans relax i terapeutske masaže u Vašem domu.",
    features: ["Dolazak na adresu", "Kompletna oprema", "Premium prirodna ulja", "Aromaterapija", "Obrenovac i okolina"],
    featured: false,
  },
  {
    name: "Golden Aura",
    price: "6.000",
    duration: "90 minuta",
    desc: "Naš najtraženiji wellness ritual za potpunu regeneraciju tela.",
    features: ["Dolazak na adresu", "Dubinska masaža", "Tretman stopala i lica", "Produženi zen efekat", "Beograd i šira okolina"],
    featured: true,
  },
  {
    name: "Power Recovery",
    price: "5.500",
    duration: "60 minuta",
    desc: "Intenzivna sportska masaža za brz oporavak mišića.",
    features: ["Dolazak na adresu", "Trigger point terapija", "Istezanje mišića", "Uklanjanje mlečne kiseline", "Dolazak u teretanu/stan"],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="paketi" className="relative py-32 overflow-hidden bg-gradient-emerald">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gold">— Paketi —</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-champagne mt-4 mb-6">
            Tri nivoa <span className="text-gradient-gold font-serif italic">posvećenosti sebi</span>
          </h2>
          <div className="gold-divider w-32 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-3xl p-8 lg:p-10 hover-lift overflow-hidden transition-all duration-500 ${
                p.featured
                  ? "glass-gold ring-1 ring-gold/40 lg:scale-[1.03] lg:-my-2 hover:bg-gradient-gold"
                  : "glass"
              }`}
            >
              {p.featured && (
                <div className="absolute inset-x-0 -top-px h-px animate-shimmer group-hover:bg-white/50" />
              )}
              
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="text-xs tracking-[0.4em] uppercase text-gold/80 transition-colors duration-500 group-hover:text-white/80">
                  {p.duration}
                </div>
                {p.featured && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-gold text-primary-foreground text-[10px] tracking-[0.25em] uppercase font-medium transition-all duration-500 group-hover:bg-transparent group-hover:text-white group-hover:border group-hover:border-white/50 shadow-sm whitespace-nowrap">
                    <Crown className="h-3 w-3" /> Najtraženiji
                  </div>
                )}
              </div>

              <h3 className="font-display text-3xl text-champagne mb-3 tracking-wide transition-colors duration-500 group-hover:text-white">{p.name}</h3>
              <p className="font-serif text-base text-champagne/70 leading-relaxed mb-8 min-h-[3rem] transition-colors duration-500 group-hover:text-white/90">{p.desc}</p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="font-display text-5xl text-gradient-gold transition-colors duration-500 group-hover:text-white">{p.price}</span>
                <span className="text-sm tracking-widest uppercase text-champagne/60 transition-colors duration-500 group-hover:text-white/60">RSD</span>
              </div>

              <div className="gold-divider mb-6 group-hover:bg-white/30" />

              <ul className="space-y-3 mb-10">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-serif text-champagne/85 transition-colors duration-500 group-hover:text-white">
                    <Check className="h-4 w-4 text-gold mt-1 shrink-0 transition-colors duration-500 group-hover:text-white" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className={`block w-full text-center px-6 py-3.5 rounded-full text-sm tracking-[0.3em] uppercase transition-all duration-500 ${
                  p.featured
                    ? "bg-gradient-gold text-primary-foreground shadow-gold group-hover:bg-transparent group-hover:text-white group-hover:border group-hover:border-white/50 group-hover:shadow-glow"
                    : "glass-gold text-gold hover:bg-gradient-gold hover:text-primary-foreground"
                }`}
              >
                Rezerviši
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs tracking-[0.3em] uppercase text-champagne/50 mt-12">
          * Pakete je moguće prilagoditi vašim potrebama
        </p>
      </div>
    </section>
  );
}
