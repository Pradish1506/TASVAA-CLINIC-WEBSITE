import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Priya S.",
    treatment: "Hydra Facial",
    text: "The clinic feels like a luxury spa, but the results are clinical-grade. My skin has never looked better.",
  },
  {
    name: "Ankit R.",
    treatment: "PRP Therapy",
    text: "Genuine consultation, no upselling. Visible regrowth after 3 sessions. Highly recommend Dr. Krithi.",
  },
  {
    name: "Sneha K.",
    treatment: "Pigmentation Treatment",
    text: "Tasvaa transformed my skin tone. The team is warm, professional and incredibly skilled.",
  },
  {
    name: "Rahul M.",
    treatment: "Laser Hair Reduction",
    text: "Painless sessions, beautiful clinic, and real results. Worth every rupee.",
  },
  {
    name: "Meera T.",
    treatment: "Anti Aging",
    text: "I feel ten years younger. The personalised plan really works — natural, not overdone.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % reviews.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-marble opacity-70" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-gold">Patient Stories</span>
        <h2 className="mt-3 font-display text-4xl text-coffee sm:text-5xl">
          Loved by those we care for.
        </h2>

        <div className="mt-14 relative h-[260px] sm:h-[220px]">
          {reviews.map((r, idx) => (
            <article
              key={r.name}
              className={`absolute inset-0 transition-all duration-700 ${
                idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-10 shadow-luxe">
                <Quote className="h-8 w-8 text-gold mx-auto" />
                <p className="mt-5 font-display text-2xl text-coffee leading-relaxed sm:text-3xl">
                  “{r.text}”
                </p>
                <div className="mt-6 flex items-center justify-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-coffee font-medium">
                  {r.name} <span className="text-muted-foreground">· {r.treatment}</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Review ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-8 bg-coffee" : "w-2 bg-coffee/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
