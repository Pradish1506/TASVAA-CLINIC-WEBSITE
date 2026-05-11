import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Treatments" },
  { href: "#why", label: "Why Tasvaa" },
  { href: "#doctor", label: "Doctor" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{ backgroundColor: "#faf7f2", boxShadow: "0 1px 8px 0 rgba(0,0,0,0.07)" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-stone-200"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full gradient-gold text-coffee font-display text-lg font-semibold">
            T
          </span>
          <span className="font-display text-xl text-coffee leading-none">
            Tasvaa
            <span className="block text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-0.5">
              Skin & Hair
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-coffee/80 hover:text-coffee transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="flex items-center gap-2 text-sm text-coffee/80 hover:text-coffee"
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <a
            href="#appointment"
            className="rounded-full bg-coffee px-5 py-2.5 text-sm text-primary-foreground hover:opacity-90 transition shadow-soft"
          >
            Book Appointment
          </a>
        </div>

        <button
          className="lg:hidden text-coffee p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border">
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-coffee/90 py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={() => setOpen(false)}
              className="rounded-full bg-coffee text-primary-foreground text-center py-3 mt-2"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
