import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink("Hi Tasvaa, I'd like to book a consultation.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-luxe hover:scale-105 transition"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <MessageCircle className="relative h-6 w-6" />
    </a>
  );
}
