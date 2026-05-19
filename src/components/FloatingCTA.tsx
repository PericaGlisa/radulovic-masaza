import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function FloatingCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://wa.me/38166100586"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pišite na WhatsApp"
      className={`fixed bottom-6 right-6 z-50 group inline-flex items-center gap-3 pl-4 pr-5 py-3.5 rounded-full bg-gradient-gold text-primary-foreground shadow-gold hover:shadow-glow transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <span className="absolute inset-0 rounded-full animate-glow opacity-60" />
      <MessageCircle className="relative h-5 w-5" />
      <span className="relative text-xs tracking-[0.25em] uppercase font-medium hidden sm:inline">
        Pišite nam
      </span>
    </a>
  );
}
