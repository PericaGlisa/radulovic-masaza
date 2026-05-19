import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/experience.jpg";

const items = [
  { src: g1, alt: "Bele orhideje" },
  { src: g2, alt: "Zen kamenje" },
  { src: g3, alt: "Sveće u spa enterijeru" },
  { src: g4, alt: "Masažno ulje" },
  { src: g5, alt: "Aromaterapijska ulja" },
  { src: g6, alt: "Luksuzni spa enterijer" },
];

export function Gallery() {
  return (
    <section id="galerija" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gold">— Atmosfera —</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-champagne mt-4 mb-6">
            Trenuci <span className="text-gradient-gold font-serif italic">tišine</span>
          </h2>
          <div className="gold-divider w-32 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.8 }}
              className="group relative overflow-hidden rounded-2xl gold-border shadow-luxury aspect-square"
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
