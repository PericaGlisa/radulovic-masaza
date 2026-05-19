import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import { Particles } from "./Particles";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/70 to-forest" />
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      <Particles count={60} />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-10"
        >
          <div className="relative">
            <div className="absolute -inset-10 rounded-full border border-gold/25 animate-spin-slow [mask-image:radial-gradient(circle,transparent_55%,black_56%)]" />
            <div
              className="absolute -inset-14 rounded-full border border-gold/15 animate-spin-slow"
              style={{ animationDirection: "reverse", animationDuration: "40s" }}
            />
            <div className="absolute inset-0 rounded-full bg-gold/30 blur-3xl animate-glow" />
            <div className="absolute -inset-6 rounded-full bg-gradient-gold opacity-25 blur-2xl" />
            <div
              className="absolute -inset-2 rounded-full opacity-70 animate-spin-slow"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, oklch(0.88 0.09 85 / 0.7) 60deg, transparent 140deg, transparent 240deg, oklch(0.78 0.13 85 / 0.5) 300deg, transparent 360deg)",
                maskImage: "radial-gradient(circle, transparent 62%, black 64%)",
                WebkitMaskImage: "radial-gradient(circle, transparent 62%, black 64%)",
              }}
            />
            <div className="relative rounded-full p-[3px] bg-gradient-gold shadow-glow">
              <div className="rounded-full p-2 bg-forest">
                <img
                  src={logo}
                  alt="Slobodan Radulović — Profesionalni Manuelni Terapeut"
                  className="relative h-44 w-44 md:h-56 md:w-56 rounded-full object-cover"
                />
              </div>
            </div>
            <Sparkles className="absolute -top-2 -right-2 h-5 w-5 text-gold animate-glow" />
            <Sparkles
              className="absolute -bottom-2 -left-2 h-4 w-4 text-gold/80 animate-glow"
              style={{ animationDelay: "1.5s" }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold mb-6 cursor-default transition-all duration-500 hover:bg-gradient-gold hover:shadow-glow"
        >
          <Sparkles className="h-3.5 w-3.5 text-gold transition-colors duration-500 group-hover:text-white" />
          <span className="text-xs tracking-[0.3em] uppercase text-gold transition-colors duration-500 group-hover:text-white font-semibold">Premium Wellness Studio</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl text-champagne leading-[1.1] mb-6"
        >
          Povratite ravnotežu <br />
          <span className="text-gradient-gold font-serif italic">tela i uma</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="font-serif text-lg md:text-xl text-champagne/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Profesionalne manuelne terapije, masaže i premium wellness tretmani —
          iskustvo koje smiruje, leči i obnavlja.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#kontakt"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium tracking-widest uppercase text-sm shadow-gold hover:shadow-glow transition-all hover:scale-[1.03]"
          >
            Zakažite Termin
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#tretmani"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full glass text-champagne font-medium tracking-widest uppercase text-sm hover:bg-gold/10 transition-all"
          >
            Pogledajte Tretmane
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="h-12 w-px bg-gradient-to-b from-transparent to-gold" />
      </div>
    </section>
  );
}
