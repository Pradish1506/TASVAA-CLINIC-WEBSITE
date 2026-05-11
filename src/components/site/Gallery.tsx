import g1 from "@/assets/4.webp";
import g2 from "@/assets/5.webp";
import g3 from "@/assets/4.webp";
import g4 from "@/assets/5.webp";
import hero from "@/assets/hero-clinic.jpg";
import about from "@/assets/about-treatment.jpg";

const items = [
  { src: g2, alt: "Reception lounge", className: "row-span-2" },
  { src: g1, alt: "Treatment room", className: "" },
  { src: hero, alt: "Clinic reception", className: "" },
  { src: g4, alt: "Glowing skin result", className: "row-span-2" },
  { src: about, alt: "Skincare on marble", className: "" },
  { src: g3, alt: "Premium serum range", className: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">The Space</span>
          <h2 className="mt-3 font-display text-4xl text-coffee sm:text-5xl">
            Step inside Tasvaa.
          </h2>
          <p className="mt-5 text-muted-foreground">
            A calm, considered space designed to make every visit feel restorative.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-4">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`reveal group relative overflow-hidden rounded-2xl shadow-card ${it.className}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
