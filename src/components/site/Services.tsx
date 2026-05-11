import {
  Droplets, Sparkles, Scissors, Syringe, Sun, FlaskConical,
  Zap, Wind, Leaf, Moon, HeartPulse, Star, Bandage, Stethoscope, Flower2,
} from "lucide-react";

const services = [
  { icon: Droplets, name: "Acne Treatment", desc: "Clinical protocols for clear, balanced skin." },
  { icon: Sun, name: "Pigmentation Treatment", desc: "Even, luminous tone with targeted therapy." },
  { icon: Scissors, name: "Hair Fall Treatment", desc: "Root-cause analysis & restorative care." },
  { icon: Syringe, name: "PRP Therapy", desc: "Regenerative therapy for hair & skin." },
  { icon: Droplets, name: "Hydra Facial", desc: "Deep hydration with instant glow." },
  { icon: FlaskConical, name: "Chemical Peel", desc: "Renewed, radiant skin texture." },
  { icon: Zap, name: "Laser Hair Reduction", desc: "Smooth, lasting hair-free skin." },
  { icon: Sparkles, name: "Skin Rejuvenation", desc: "Refresh tone, texture & radiance." },
  { icon: Moon, name: "Anti Aging Treatment", desc: "Lift, firm and restore youthful skin." },
  { icon: Wind, name: "Dandruff Treatment", desc: "Healthy, flake-free, balanced scalp." },
  { icon: Leaf, name: "Hair Regrowth Therapy", desc: "Stimulate density & natural growth." },
  { icon: Star, name: "Skin Brightening", desc: "Visibly luminous, even-toned complexion." },
  { icon: Flower2, name: "Medi Facials", desc: "Doctor-led facials for visible results." },
  { icon: Bandage, name: "Scar Treatment", desc: "Smoother, refined skin surface." },
  { icon: Stethoscope, name: "Dermatology Consultation", desc: "Personalized expert assessment." },
  { icon: HeartPulse, name: "Wellness & Skin Health", desc: "Holistic skin & hair protocols." },
];

export function Services() {
  return (
    <section id="services" className="bg-cream/60 py-24 lg:py-32 relative">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Treatments</span>
          <h2 className="mt-3 font-display text-4xl text-coffee sm:text-5xl">
            Curated treatments for skin & hair.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Every treatment is doctor-led, evidence-based, and tailored to
            your concern, lifestyle and skin biology.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map(({ icon: Icon, name, desc }, i) => (
            <article
              key={name}
              className="reveal group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 gradient-warm" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-gold text-coffee shadow-soft">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl text-coffee">{name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <a
                  href="#appointment"
                  className="mt-5 inline-flex text-xs uppercase tracking-widest text-coffee/80 hover:text-coffee"
                >
                  Enquire →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
