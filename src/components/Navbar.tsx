import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Instagram, Facebook, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#tretmani", label: "Tretmani" },
  { href: "#iskustvo", label: "Iskustvo" },
  { href: "#paketi", label: "Paketi" },
  { href: "#o-meni", label: "O meni" },
  { href: "#galerija", label: "Galerija" },
  { href: "#pitanja", label: "Pitanja" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? "py-3 bg-forest/95 backdrop-blur-xl border-gold/20 shadow-luxury"
            : "py-5 bg-forest/85 backdrop-blur-md border-gold/10"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between px-6">
          <a href="#" className="flex items-center gap-2 md:gap-3" onClick={() => setOpen(false)}>
            <img src={logo} alt="Slobodan Radulović" className="h-10 w-10 md:h-12 md:w-12 rounded-full shadow-glow" />
            <div className="block">
              <div className="font-display text-[12px] md:text-sm tracking-[0.2em] md:tracking-[0.25em] text-gradient-gold">SLOBODAN</div>
              <div className="font-display text-[9px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] text-champagne/80">RADULOVIĆ</div>
            </div>
          </a>

          <ul className="hidden xl:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm tracking-widest uppercase text-champagne/80 hover:text-gold transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop/Tablet (Lg) links - more compact */}
          <ul className="hidden lg:flex xl:hidden items-center gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[11px] tracking-widest uppercase text-champagne/80 hover:text-gold transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center px-5 py-2 rounded-full glass-gold text-gold text-[11px] xl:text-sm tracking-widest uppercase hover:bg-gradient-gold hover:text-primary-foreground transition-all"
            >
              Zakažite
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden relative z-[60] h-10 w-10 md:h-11 md:w-11 inline-flex items-center justify-center rounded-full glass-gold text-gold hover:bg-gradient-gold hover:text-primary-foreground transition-all"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="inline-flex"
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="m"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="inline-flex"
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-forest/95 backdrop-blur-2xl" />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse at top right, oklch(0.78 0.13 85 / 0.25), transparent 60%), radial-gradient(ellipse at bottom left, oklch(0.28 0.06 165 / 0.6), transparent 60%)",
              }}
            />

            {/* Content */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full w-full flex flex-col px-8 pt-28 pb-10 overflow-y-auto"
            >
              <div className="gold-divider w-full mb-10" />

              <nav className="flex-1">
                <ul className="flex flex-col gap-1">
                  {links.map((l, i) => (
                    <motion.li
                      key={l.href}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-baseline justify-between border-b border-gold/10 py-5"
                      >
                        <span className="font-display text-3xl text-champagne group-hover:text-gradient-gold transition-colors">
                          {l.label}
                        </span>
                        <span className="font-serif italic text-xs text-gold/60 tracking-widest">
                          0{i + 1}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-10 space-y-5"
              >
                <a
                  href="#kontakt"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-4 rounded-full bg-gradient-gold text-primary-foreground font-display tracking-[0.3em] uppercase text-sm shadow-gold animate-glow"
                >
                  Zakažite tretman
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:+38166100586"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-full glass-gold text-gold text-sm tracking-wider"
                  >
                    <Phone className="h-4 w-4" /> Pozovi
                  </a>
                  <a
                    href="https://www.instagram.com/radulovic.masaza.obrenovac/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-full glass text-champagne/90 text-sm tracking-wider hover:text-gold transition-colors"
                  >
                    <Instagram className="h-4 w-4" /> Instagram
                  </a>
                </div>

                <div className="flex items-start gap-3 text-champagne/70 text-sm pt-4">
                  <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                  <span className="font-serif">Đačkog bataljona 4, 11500 Obrenovac</span>
                </div>

                <div className="flex items-center justify-center gap-6 pt-4 text-champagne/60">
                  <a
                    href="https://www.facebook.com/salon.radulovic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="hover:text-gold transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <span className="text-xs tracking-[0.4em] uppercase">— Wellness & Spa —</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
