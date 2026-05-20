import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Kako se zakazuje termin?",
    a: "Termin možete zakazati putem formulara, telefona ili Instagram poruke. Potvrda stiže u roku od nekoliko sati, sa svim detaljima i pripremnim savetima.",
  },
  {
    q: "Koliko traje jedna seansa?",
    a: "Tretmani traju od 60 do 120 minuta, u zavisnosti od izabranog paketa. Preporučujem da računate i 15 minuta pre i posle, za potpuno iskustvo.",
  },
  {
    q: "Da li je tretman bolan?",
    a: "Manuelna terapija može biti intenzivna, ali nikada bolna. Svaki pokret se prilagođava vašem pragu osetljivosti — komfor i poverenje su osnova rada.",
  },
  {
    q: "Šta je potrebno da pripremim pre Vašeg dolaska?",
    a: "Sve što Vam je potrebno je čist peškir i mali prostor u domu gde možemo postaviti sto za masažu (oko 2x2 metra). Ja donosim profesionalni sto, ulja, muziku i sve ostalo što je neophodno za tretman.",
  },
  {
    q: "Gde sve dolazite na adresu?",
    a: "Primarno radim na teritoriji Obrenovca i okoline, ali po dogovoru dolazim i u druge delove Beograda. Slobodno me kontaktirajte za proveru lokacije.",
  },
  {
    q: "Da li je masaža kod kuće jednako kvalitetna kao u wellness centrima?",
    a: "Apsolutno. Koristim isti profesionalni sto i premium opremu kao u najboljim spa centrima. Prednost je što ste u svom poznatom okruženju, što dodatno doprinosi opuštanju.",
  },
  {
    q: "Kako mogu zakazati termin i koliko unapred?",
    a: "Termin možete zakazati putem telefona ili WhatsApp/Viber poruke. Preporučujem da zakažete bar 1-2 dana unapred, mada je ponekad moguće organizovati dolazak i istog dana.",
  },
];

export function FAQ() {
  return (
    <section id="pitanja" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gold">— Pitanja —</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-champagne mt-4 mb-6">
            Najčešća <span className="text-gradient-gold font-serif italic">pitanja</span>
          </h2>
          <div className="gold-divider w-32 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mx-auto glass rounded-3xl p-4 md:p-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-gold/15 last:border-0"
              >
                <AccordionTrigger className="font-display text-lg md:text-xl text-champagne hover:text-gold tracking-wide text-left py-6 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-serif text-base md:text-lg text-champagne/75 leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
