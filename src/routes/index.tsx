import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Doctor } from "@/components/site/Doctor";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Appointment } from "@/components/site/Appointment";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tasvaa Skin & Hair Clinic — Premium Dermatology Care" },
      {
        name: "description",
        content:
          "Tasvaa Skin and Hair Clinic offers advanced dermatology, hair restoration, PRP, laser, hydra facials and personalized aesthetic care in a luxurious setting.",
      },
      { property: "og:title", content: "Tasvaa Skin & Hair Clinic" },
      {
        property: "og:description",
        content:
          "Advanced skin and hair treatments with personalized care in a calm, premium clinic environment.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Doctor />
        <Testimonials />
        <Gallery />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
