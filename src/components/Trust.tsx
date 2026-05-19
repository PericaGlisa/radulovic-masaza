import { motion } from "framer-motion";
import { Award, Users, Heart, Sparkles } from "lucide-react";

const stats = [
  { icon: Award, value: "12+", label: "Godina iskustva" },
  { icon: Users, value: "2500+", label: "Zadovoljnih klijenata" },
  { icon: Heart, value: "100%", label: "Individualni pristup" },
  { icon: Sparkles, value: "15+", label: "Premium tretmana" },
];

export function Trust() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="glass rounded-2xl p-6 md:p-8 text-center hover-lift"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full glass-gold mb-4">
                <s.icon className="h-6 w-6 text-gold" />
              </div>
              <div className="font-display text-3xl md:text-4xl text-gradient-gold mb-2">
                {s.value}
              </div>
              <div className="text-xs md:text-sm tracking-widest uppercase text-champagne/70">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
