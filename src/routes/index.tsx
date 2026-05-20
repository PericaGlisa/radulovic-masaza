import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Trust } from "@/components/Trust";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Experience } from "@/components/Experience";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { FAQ } from "@/components/FAQ";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingCTA } from "@/components/FloatingCTA";
import { BackToTop } from "@/components/BackToTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Golden Aura Wellness | Profesionalni Manuelni Terapeut & Masaža" },
      {
        name: "description",
        content:
          "Golden Aura Wellness studio Slobodana Radulovića — profesionalne manuelne terapije, relax i sportske masaže, antistres i aromaterapija u luksuznoj zen atmosferi. Otkrijte harmoniju duha i tela.",
      },
      { property: "og:title", content: "Golden Aura Wellness — Holistički Wellness & Spa" },
      {
        property: "og:description",
        content:
          "Profesionalni manuelni tretmani i masaže na Vašoj adresi. Povratite ravnotežu tela i uma u udobnosti sopstvenog doma u Obrenovcu i Beogradu.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: "Golden Aura Wellness — Slobodan Radulović",
          description:
            "Profesionalni manuelni terapeut i maser. Premium wellness tretmani na Vašoj adresi u Obrenovcu i Beogradu.",
          telephone: "+38166100586",
          areaServed: [
            {
              "@type": "City",
              name: "Obrenovac",
            },
            {
              "@type": "City",
              name: "Beograd",
            },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Obrenovac",
            addressRegion: "Beograd",
            addressCountry: "RS",
          },
          sameAs: [
            "https://www.instagram.com/radulovic.masaza.obrenovac/",
            "https://www.facebook.com/salon.radulovic/",
          ],
          areaServed: "Obrenovac, Beograd, Srbija",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden noise-overlay">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <Trust />
      <Services />
      <Process />
      <Experience />
      <Pricing />
      <Testimonials />
      <About />
      <Gallery />
      <FAQ />
      <Booking />
      <Footer />
      <FloatingCTA />
      <BackToTop />
    </main>
  );
}
