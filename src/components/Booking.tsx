import { motion } from "framer-motion";
import { Calendar, Mail, MessageSquare, Phone, Sparkles, User } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Particles } from "./Particles";

const treatments = [
  "Manuelna Terapija",
  "Relax Masaža",
  "Sportska Masaža",
  "Antistres Tretman",
  "Aromaterapija",
  "Wellness Ritual",
];

export function Booking() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="kontakt" className="relative py-32 overflow-hidden">
      <Particles count={30} />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gold">— Rezervacija —</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-champagne mt-4 mb-6">
            Zakažite vaš <span className="text-gradient-gold font-serif italic">trenutak mira</span>
          </h2>
          <p className="font-serif text-lg text-champagne/70">
            Popunite formular i kontaktiraću vas u najkraćem mogućem roku radi potvrde termina.
          </p>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto glass rounded-3xl p-8 md:p-12 shadow-luxury"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <Field icon={User} label="Ime i prezime" type="text" required />
            <Field icon={Phone} label="Telefon" type="tel" required />
            <Field icon={Mail} label="Email" type="email" required />
            <Field icon={Calendar} label="Datum" type="date" required />

            <div className="md:col-span-2">
              <label className="block text-xs tracking-[0.3em] uppercase text-gold/80 mb-3">
                <Sparkles className="inline h-3.5 w-3.5 mr-2" />
                Vrsta tretmana
              </label>
              <select
                required
                className="w-full bg-transparent border border-gold/30 rounded-xl px-4 py-3.5 text-champagne focus:outline-none focus:border-gold focus:shadow-glow transition-all"
                defaultValue=""
              >
                <option value="" disabled className="bg-forest">Izaberite tretman</option>
                {treatments.map((t) => (
                  <option key={t} value={t} className="bg-forest">{t}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs tracking-[0.3em] uppercase text-gold/80 mb-3">
                <MessageSquare className="inline h-3.5 w-3.5 mr-2" />
                Poruka
              </label>
              <textarea
                rows={4}
                placeholder="Napišite poruku ili posebne želje..."
                className="w-full bg-transparent border border-gold/30 rounded-xl px-4 py-3.5 text-champagne placeholder:text-champagne/40 focus:outline-none focus:border-gold focus:shadow-glow transition-all resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium tracking-[0.3em] uppercase text-sm shadow-gold hover:shadow-glow hover:scale-[1.01] transition-all"
          >
            {sent ? "Hvala! Vaš zahtev je poslat" : "Pošaljite Rezervaciju"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  icon: Icon,
  label,
  type,
  required,
}: {
  icon: typeof User;
  label: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs tracking-[0.3em] uppercase text-gold/80 mb-3">
        <Icon className="inline h-3.5 w-3.5 mr-2" />
        {label}
      </label>
      <input
        type={type}
        required={required}
        className="w-full bg-transparent border border-gold/30 rounded-xl px-4 py-3.5 text-champagne placeholder:text-champagne/40 focus:outline-none focus:border-gold focus:shadow-glow transition-all"
      />
    </div>
  );
}
