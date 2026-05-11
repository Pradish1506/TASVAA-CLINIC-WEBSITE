import { useState } from "react";
import { z } from "zod";
import { buildWhatsAppLink } from "@/lib/site";
import { CalendarDays, Clock, Phone, User, MessageSquare, Sparkles, ChevronDown } from "lucide-react";
import * as Popover from "@radix-ui/react-popover";

const timeSlots = [
  "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM",
  "1:00 PM",  "1:30 PM",
  "2:00 PM",  "2:30 PM",
  "3:00 PM",  "3:30 PM",
  "4:00 PM",  "4:30 PM",
  "5:00 PM",  "5:30 PM",
  "6:00 PM",  "6:30 PM",
  "7:00 PM",  "7:30 PM",
];

const treatments = [
  "Acne Treatment", "Pigmentation Treatment", "Hair Fall Treatment", "PRP Therapy",
  "Hydra Facial", "Chemical Peel", "Laser Hair Reduction", "Skin Rejuvenation",
  "Anti Aging Treatment", "Dandruff Treatment", "Hair Regrowth Therapy",
  "Skin Brightening", "Medi Facials", "Scar Treatment", "Dermatology Consultation",
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  date: z.string().min(1, "Pick a date"),
  time: z.string().min(1, "Pick a time"),
  treatment: z.string().min(1, "Choose a treatment"),
  message: z.string().max(500).optional().or(z.literal("")),
});

export function Appointment() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedTime, setSelectedTime] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const msg = `New Appointment Request

Name: ${parsed.data.name}
Phone: ${parsed.data.phone}
Preferred Date: ${parsed.data.date}
Preferred Time: ${parsed.data.time}
Treatment: ${parsed.data.treatment}
Message: ${parsed.data.message || "-"}`;
    window.open(buildWhatsAppLink(msg), "_blank");
  };

  const inputCls =
    "w-full rounded-xl border border-border bg-background/70 px-4 py-3 pl-11 text-sm text-coffee placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-gold/40 transition";

  return (
    <section id="appointment" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-marble" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Book a Visit</span>
            <h2 className="mt-3 font-display text-4xl text-coffee sm:text-5xl">
              Request your appointment.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Share a few details and our team will confirm your slot via
              WhatsApp. Same-day consultations subject to availability.
            </p>

            <div className="mt-8 space-y-4 text-sm text-coffee">
              <div className="flex items-center gap-3">
                <Sparkles className="h-4 w-4 text-gold" /> Personalised consultation
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-gold" /> Mon–Thu & Sat · 11am–8pm · Sun · 10:30am–1:30pm · Fri Closed
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold" /> Instant WhatsApp confirmation
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-7 reveal rounded-3xl border border-border bg-card/90 backdrop-blur p-7 sm:p-10 shadow-luxe"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" error={errors.name}>
                <User className="field-icon" />
                <input name="name" placeholder="Your name" className={inputCls} maxLength={80} />
              </Field>
              <Field label="Phone Number" error={errors.phone}>
                <Phone className="field-icon" />
                <input name="phone" type="tel" placeholder="+91 ..." className={inputCls} maxLength={20} />
              </Field>
              <Field label="Preferred Date" error={errors.date}>
                <CalendarDays className="field-icon" />
                <input name="date" type="date" className={inputCls} />
              </Field>
              <Field label="Preferred Time" error={errors.time}>
                <input type="hidden" name="time" value={selectedTime} />
                <TimePicker value={selectedTime} onChange={setSelectedTime} />
              </Field>
              <Field label="Treatment Interested In" error={errors.treatment} className="sm:col-span-2">
                <Sparkles className="field-icon" />
                <select name="treatment" className={inputCls} defaultValue="">
                  <option value="" disabled>Select a treatment</option>
                  {treatments.map((t) => <option key={t}>{t}</option>)}
                </select>
              </Field>
              <Field label="Message (optional)" error={errors.message} className="sm:col-span-2">
                <MessageSquare className="field-icon" />
                <textarea
                  name="message"
                  rows={4}
                  maxLength={500}
                  placeholder="Tell us briefly about your concern..."
                  className={inputCls + " pl-11 pt-3 resize-none"}
                />
              </Field>
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-full bg-coffee px-7 py-4 text-sm text-primary-foreground shadow-luxe hover:opacity-95 transition"
            >
              Send Request via WhatsApp
            </button>
            <p className="mt-3 text-xs text-muted-foreground text-center">
              By submitting you agree to be contacted on the number provided.
            </p>
          </form>
        </div>
      </div>

      <style>{`.field-icon{position:absolute;left:14px;top:14px;width:18px;height:18px;color:var(--gold);pointer-events:none;}`}</style>
    </section>
  );
}

function TimePicker({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const amSlots = timeSlots.filter((t) => t.includes("AM"));
  const pmSlots = timeSlots.filter((t) => t.includes("PM"));

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          type="button"
          className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 pl-11 text-sm text-left transition focus:outline-none focus:ring-2 focus:ring-gold/40 flex items-center justify-between"
        >
          <Clock className="absolute left-[14px] top-[14px] h-[18px] w-[18px] text-gold pointer-events-none" />
          <span className={value ? "text-coffee" : "text-muted-foreground/70"}>{value || "Select a time"}</span>
          <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          sideOffset={8}
          className="z-50 w-72 rounded-2xl border border-border bg-card shadow-luxe p-4 animate-in fade-in-0 zoom-in-95"
        >
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-4 w-4 text-gold" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Pick a time</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gold mb-2 text-center">Morning</p>
              <div className="grid grid-cols-1 gap-1.5">
                {amSlots.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => { onChange(t); setOpen(false); }}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                      value === t
                        ? "bg-coffee text-primary-foreground shadow-sm"
                        : "bg-background hover:bg-gold/10 text-coffee border border-border"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-widest text-gold mb-2 text-center">Afternoon</p>
              <div className="grid grid-cols-1 gap-1.5 max-h-52 overflow-y-auto pr-1">
                {pmSlots.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => { onChange(t); setOpen(false); }}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                      value === t
                        ? "bg-coffee text-primary-foreground shadow-sm"
                        : "bg-background hover:bg-gold/10 text-coffee border border-border"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <Popover.Arrow className="fill-border" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

function Field({
  label, children, error, className = "",
}: { label: string; children: React.ReactNode; error?: string; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      <div className="relative">{children}</div>
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
