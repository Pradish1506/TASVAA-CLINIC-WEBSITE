import doctorImg from "@/assets/Doctor.jpg";
import { GraduationCap, Stethoscope, Award } from "lucide-react";

export function Doctor() {
  return (
    <section id="doctor" className="bg-cream/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="relative">
              <div className="absolute -inset-5 gradient-gold opacity-25 rounded-[2rem] blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-luxe">
                <img
                  src={doctorImg}
                  alt="Dr. Krithi Subhas — Lead Dermatologist at Tasvaa Clinic"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-[520px] w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Meet Your Specialist</span>
            <h2 className="mt-3 font-display text-4xl text-coffee sm:text-5xl">
              Dr. Krithi Subhas
            </h2>
            <p className="mt-2 text-muted-foreground">Founder & Chief Dermatologist</p>
            <div className="hairline my-8 max-w-xs" />

            <div className="grid gap-5 sm:grid-cols-3">
              {[
                { icon: GraduationCap, label: "Qualification", value: "MBBS, MD (Dermatology)" },
                { icon: Award, label: "Experience", value: "12+ Years" },
                { icon: Stethoscope, label: "Specialty", value: "Aesthetic & Hair" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                  <Icon className="h-5 w-5 text-gold" />
                  <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
                  <p className="mt-1 text-coffee font-medium">{value}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-muted-foreground leading-relaxed max-w-2xl">
              Dr. Krithi Subhas is known for her precise, science-led approach to
              dermatology and trichology. She has helped thousands of patients
              restore healthy skin and hair with bespoke, evidence-based protocols
              delivered in a warm, personal setting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
