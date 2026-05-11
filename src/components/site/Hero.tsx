import heroImg from "@/assets/2.webp";
import { buildWhatsAppLink } from "@/lib/site";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-marble pt-28 pb-20 lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-cream/70 px-4 py-1.5 text-xs tracking-[0.25em] uppercase text-coffee">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Premium Dermatology
          </div>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-coffee sm:text-6xl lg:text-7xl">
            Advanced Skin & Hair Care
            <span className="block italic text-walnut/90">
              with personalized treatment.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            At Tasvaa, science meets serenity. Experience world-class
            dermatology and trichology in a calm, luxurious setting designed
            around your unique skin and hair journey.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={buildWhatsAppLink(
                "Hi Tasvaa, I'd like to book a consultation."
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-coffee px-7 py-4 text-sm text-primary-foreground shadow-luxe hover:translate-y-[-1px] transition"
            >
              <MessageCircle className="h-4 w-4" /> Book via WhatsApp
            </a>
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 rounded-full border border-coffee/30 px-7 py-4 text-sm text-coffee hover:bg-cream transition"
            >
              Request Appointment <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              ["10+", "Years Expertise"],
              ["15K+", "Happy Patients"],
              ["20+", "Advanced Treatments"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl text-coffee">{n}</dt>
                <dd className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="absolute -inset-6 gradient-gold opacity-20 blur-3xl rounded-[3rem]" />
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-luxe border border-border/60">
            <img
              src={heroImg}
              alt="Luxurious Tasvaa skin and hair clinic interior with marble and walnut wood"
              width={1600}
              height={1024}
              className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[640px]"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:block glass rounded-2xl px-5 py-4 shadow-soft border border-border/60">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Today</p>
            <p className="font-display text-lg text-coffee">Consultations Open</p>
          </div>
        </div>
      </div>
    </section>
  );
}
