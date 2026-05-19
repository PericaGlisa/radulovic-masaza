import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Milica Jovanović",
    rating: 5,
    text: "Najbolja masaža koju sam ikada doživela. Atmosfera je čarobna, a Slobodan je pravi profesionalac. Osećala sam se kao nova osoba.",
  },
  {
    name: "Nikola Petrović",
    rating: 5,
    text: "Posle godinu dana bolova u leđima, već posle treće seanse manuelne terapije osetio sam ogroman pomak. Toplo preporučujem.",
  },
  {
    name: "Ana Marković",
    rating: 5,
    text: "Premium iskustvo u svakom smislu. Detalji, miris, muzika, tretman — sve je do savršenstva. Moj novi mesečni ritual.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 bg-gradient-emerald">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gold">— Utisci —</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-champagne mt-4 mb-6">
            Reči onih koji su <span className="text-gradient-gold font-serif italic">osetili razliku</span>
          </h2>
          <div className="gold-divider w-32 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.9 }}
              className="relative glass rounded-3xl p-8 hover-lift"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-gold/30" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-serif italic text-lg text-champagne/85 leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="gold-divider mb-4" />
              <div className="font-display tracking-widest text-sm text-gold">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
