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
            <h2 className="font-display text-4xl md:text-5xl text-champagne mb-8 leading-tight">
              Vaš Dom Postaje <br />
              <span className="text-gradient-gold italic">Oaza Mira</span>
            </h2>

            <div className="space-y-6 font-serif text-lg text-champagne/80 leading-relaxed mb-10">
              <p>
                Zovem se Slobodan Radulović i moj cilj je da Vam pružim vrhunsko wellness
                iskustvo bez stresa koji donosi putovanje do salona. Specijalizovan sam za
                profesionalne masaže i manuelne terapije koje obavljam u toplini Vašeg doma.
              </p>
              <p>
                Dolazim na Vašu adresu sa kompletnom opremom — od profesionalnog stola za masažu
                do najkvalitetnijih prirodnih ulja i opuštajuće muzike. Sve što je potrebno je
                malo prostora, a ja ću se pobrinuti za ostalo.
              </p>
              <p>
                Bilo da Vam je potrebno olakšanje od hroničnog bola, oporavak nakon treninga
                ili jednostavno sat vremena potpunog bega od stvarnosti, moje znanje i iskustvo
                su Vam na raspolaganju.
              </p>
            </div>
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
