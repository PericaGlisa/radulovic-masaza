import { Instagram, Facebook, MapPin, Phone, Clock, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-gold/20 bg-gradient-emerald pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px animate-shimmer" />
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5 justify-center sm:justify-start">
              <img src={logo} alt="Logo" className="h-14 w-14 rounded-full shadow-glow" />
              <div>
                <div className="font-display text-sm tracking-[0.25em] text-gradient-gold">SLOBODAN</div>
                <div className="font-display text-xs tracking-[0.3em] text-champagne/80">RADULOVIĆ</div>
              </div>
            </div>
            <p className="font-serif text-sm text-champagne/60 leading-relaxed text-center sm:text-left">
              Premium wellness studio za one koji traže više od obične masaže.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-display text-sm tracking-[0.3em] uppercase text-gold mb-5">Kontakt</h4>
            <ul className="space-y-3 text-sm font-serif text-champagne/75 inline-block sm:block text-left">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <a href="tel:+38166100586" className="hover:text-gold transition-colors">+381 66 100 586</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <a href="mailto:kontakt@slobodanradulovic.rs" className="hover:text-gold transition-colors">kontakt@slobodanradulovic.rs</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <span>Đačkog bataljona 4, 11500 Obrenovac</span>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-display text-sm tracking-[0.3em] uppercase text-gold mb-5">Radno Vreme</h4>
            <ul className="space-y-3 text-sm font-serif text-champagne/75 inline-block sm:block text-left">
              <li className="flex items-start gap-3"><Clock className="h-4 w-4 text-gold mt-0.5 shrink-0" /> Pon — Pet: 09:00 — 21:00</li>
              <li className="flex items-start gap-3"><Clock className="h-4 w-4 text-gold mt-0.5 shrink-0" /> Subota: 10:00 — 18:00</li>
              <li className="flex items-start gap-3"><Clock className="h-4 w-4 text-gold mt-0.5 shrink-0" /> Nedelja: po dogovoru</li>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h4 className="font-display text-sm tracking-[0.3em] uppercase text-gold mb-5">Pratite</h4>
            <div className="flex gap-3 justify-center lg:justify-start">
              <a
                href="https://www.instagram.com/radulovic.masaza.obrenovac/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-11 w-11 rounded-full glass-gold inline-flex items-center justify-center text-gold hover:bg-gradient-gold hover:text-primary-foreground transition-all"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/salon.radulovic/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-11 w-11 rounded-full glass-gold inline-flex items-center justify-center text-gold hover:bg-gradient-gold hover:text-primary-foreground transition-all"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="gold-divider mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs tracking-[0.3em] uppercase text-gold/70 order-1 md:order-2">Premium Wellness Studio</p>
          <p className="text-xs tracking-widest uppercase text-champagne/50 order-2 md:order-1">
            © {new Date().getFullYear()} Slobodan Radulović. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
