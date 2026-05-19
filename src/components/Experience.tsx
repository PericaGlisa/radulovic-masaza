import { motion } from "framer-motion";
import experienceImg from "@/assets/experience.jpg";
import { Quote } from "lucide-react";

export function Experience() {
  return (
    <section id="iskustvo" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-3xl rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-luxury gold-border">
              <img
                src={experienceImg}
                alt="Luksuzni spa enterijer"
                loading="lazy"
                width={1280}
                height={1280}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-xs tracking-[0.4em] uppercase text-gold">— Iskustvo —</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-champagne mt-4 mb-8 leading-[1.15]">
              Iskustvo koje prevazilazi <span className="text-gradient-gold font-serif italic">klasičnu masažu</span>
            </h2>
            <div className="gold-divider w-32 mb-8" />
            <p className="font-serif text-lg text-champagne/80 leading-relaxed mb-6">
              Svaki tretman je pažljivo osmišljen ritual — kombinacija stručne tehnike,
              tišine, mirisa eteričnih ulja i toplote kamenja. Vreme staje, čula se bude,
              telo pamti šta znači biti potpuno prisutno.
            </p>
            <p className="font-serif text-lg text-champagne/80 leading-relaxed mb-10">
              Cilj nije samo opuštanje — cilj je transformacija. Da odete drugačiji
              nego što ste došli.
            </p>

            <div className="group relative">
              <div className="absolute -top-4 left-8 h-10 w-10 flex items-center justify-center text-gold bg-forest rounded-full border border-gold/30 z-20 transition-all duration-700 group-hover:text-white group-hover:bg-transparent group-hover:border-white group-hover:scale-110">
                <Quote className="h-5 w-5 fill-current" />
              </div>
              <div className="relative glass-gold rounded-2xl p-8 overflow-hidden transition-all duration-700 hover:bg-gradient-gold hover:shadow-glow cursor-default">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <p className="font-serif italic text-xl text-champagne/90 leading-relaxed transition-colors duration-700 group-hover:text-white relative z-10">
                  "Pravo zdravlje počinje kada telo, um i duh pronađu istu frekvenciju."
                </p>
                <div className="mt-4 text-sm tracking-widest uppercase text-gold transition-colors duration-700 group-hover:text-white/90 font-medium relative z-10">— Slobodan Radulović</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
