import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

const quick = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Treatments" },
  { href: "#doctor", label: "Doctor" },
  { href: "#gallery", label: "Gallery" },
  { href: "#appointment", label: "Book" },
  { href: "#contact", label: "Contact" },
];

const treatments = [
  "Acne Treatment", "Hair Fall Treatment", "PRP Therapy",
  "Hydra Facial", "Laser Hair Reduction", "Anti Aging",
];

export function Footer() {
  return (
    <footer className="bg-coffee text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full gradient-gold text-coffee font-display text-lg font-semibold">T</span>
            <span className="font-display text-2xl">Tasvaa</span>
          </div>
          <p className="mt-5 text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
            A premium destination for advanced skin and hair care — clinical
            results delivered in a calm, luxurious setting.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display text-lg">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            {quick.map((q) => <li key={q.href}><a href={q.href} className="hover:text-primary-foreground">{q.label}</a></li>)}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-display text-lg">Treatments</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            {treatments.map((t) => <li key={t}><a href="#services" className="hover:text-primary-foreground">{t}</a></li>)}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-display text-lg">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-gold" /> {SITE.phone}</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-gold" /> {SITE.email}</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold" /> {SITE.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Tasvaa Skin & Hair Clinic. All rights reserved.</p>
          <p>Crafted with care for radiant skin & healthy hair.</p>
        </div>
      </div>
    </footer>
  );
}
