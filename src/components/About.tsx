import { motion } from "framer-motion";
import aboutImg from "@/assets/about.jpg";

export function About() {
  return (
    <section id="o-meni" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-3 order-2 lg:order-1"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-gold">— O Meni —</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-champagne mt-4 mb-3 leading-[1.1]">
              Slobodan
            </h2>
            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-gradient-gold mb-8">
              Radulović
            </h2>
            <div className="gold-divider w-32 mb-8" />
            <p className="font-serif text-lg text-champagne/80 leading-relaxed mb-6">
              Više od jedne decenije posvećenosti telu, pokretu i tišini. Sertifikovani
              manuelni terapeut i maser, sa kontinuiranom edukacijom iz oblasti kineziterapije,
              sportske masaže i holističkih wellness rituala.
            </p>
            <p className="font-serif text-lg text-champagne/80 leading-relaxed mb-10">
              Svaki klijent dobija individualni pristup — od prvog razgovora do poslednjeg
              dodira. Verujem da je istinski tretman umetnost prisustva, a ne tehnike.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {["Sertifikovani terapeut", "Individualni pristup", "Premium atmosfera", "Diskrecija"].map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold shadow-glow" />
                  <span className="font-serif text-champagne/80">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-2 order-1 lg:order-2 relative"
          >
            <div className="absolute -inset-6 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden shadow-luxury gold-border">
              <img
                src={aboutImg}
                alt="Premium wellness atmosfera — zen detalji studija"
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
