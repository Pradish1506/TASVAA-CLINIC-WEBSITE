import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SITE, buildWhatsAppLink } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="bg-cream/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Get in Touch</span>
          <h2 className="mt-3 font-display text-4xl text-coffee sm:text-5xl">
            Visit our clinic.
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-5">
            {[
              { icon: Phone, label: "Call Us", value: SITE.phone, href: `tel:${SITE.phoneRaw}` },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat instantly", href: buildWhatsAppLink("Hi Tasvaa, I'd like to know more.") },
              { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
              { icon: MapPin, label: "Address", value: SITE.address },
              { icon: Clock, label: "Working Hours", value: SITE.hours },
            ].map(({ icon: Icon, label, value, href }, i) => {
              const content = (
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card hover:shadow-luxe transition reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="grid h-11 w-11 place-items-center rounded-full gradient-gold text-coffee shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
                    <p className="mt-1 text-coffee">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{content}</a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="overflow-hidden rounded-3xl border border-border shadow-luxe h-[480px] lg:h-full min-h-[480px]">
              <iframe
                title="Tasvaa Clinic location"
                src={SITE.mapsEmbed}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
