import { Cpu, UserCheck, Award, Building2, ShieldCheck, HeartHandshake } from "lucide-react";

const items = [
  { icon: Cpu, title: "Advanced Technology", desc: "FDA-approved equipment and the latest dermatology innovations." },
  { icon: UserCheck, title: "Personalized Care", desc: "Treatments crafted around your skin biology and goals." },
  { icon: Award, title: "Experienced Specialists", desc: "Board-certified doctors with proven aesthetic expertise." },
  { icon: Building2, title: "Premium Environment", desc: "A calm, marble-and-walnut sanctuary built around comfort." },
  { icon: ShieldCheck, title: "Safe Procedures", desc: "Strict hygiene and global safety protocols, every visit." },
  { icon: HeartHandshake, title: "Trusted Care", desc: "Honest advice, transparent pricing and long-term support." },
];

export function WhyChoose() {
  return (
    <section id="why" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4 reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Why Tasvaa</span>
            <h2 className="mt-3 font-display text-4xl text-coffee sm:text-5xl">
              A standard of care you can feel.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We pair clinical excellence with a hospitality-led experience —
              so every appointment feels considered, calm and unmistakably premium.
            </p>
          </div>

          <div className="lg:col-span-8 grid gap-5 sm:grid-cols-2">
            {items.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="reveal rounded-2xl border border-border bg-card p-7 shadow-card hover:shadow-luxe transition"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="grid h-11 w-11 place-items-center rounded-full gradient-gold text-coffee">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl text-coffee">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
